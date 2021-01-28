import React, {useEffect, useState} from 'react';
import styles from "./GuessWhat.module.css";
import stylesLoader from "./Loader.module.css";
import firebase from "../../../services/firebase/config";

const GuessWhat = () => {

    const [text, setText] = useState(null);
    const [sentenceNumber, setSentenceNumber] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = firebase.database();

        const fetchDatabase = async () => {
            try {
                db.ref("/text/").on("value", snapshot => {
                    const response = snapshot.val();
                    const newArray = [];
                    response.map((data) => {
                        return newArray.push(data)
                    })
                    setText(newArray)
                })
            } catch(err) {
                setError(err);
            }
        }
        fetchDatabase();
    }, []);

    useEffect(() => {
        if (error) {
            return
        }

        const timer = setInterval(() => {
            if (sentenceNumber < text.length - 1) {
                setSentenceNumber(sentenceNumber + 1) 
            } else {
                setSentenceNumber(0)
            }
        }, 10000);

        return () => clearInterval(timer);
    });

    return(
        <div className={styles.container}>
            <div>
                <h3><em>Fun facts!</em></h3>
            </div>
            <div>
                {!text ? <div className={stylesLoader.loader}></div> : <h4 key={text[sentenceNumber]} className="animate__fadeIn animate__animated animate__slower"><em>{text[sentenceNumber]}</em></h4>}
            </div>
            
        </div>
    )
}

export default GuessWhat;