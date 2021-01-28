import React, {useState, useEffect} from 'react';
import styles from "./Contact.module.css";
import axios from "axios";

const Contact = () => {

    const [formSent, setformSent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setformSent(false)
        }, 4000);
        return () => clearTimeout(timer)
      }, [formSent]);

    // Input state

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleOnChange = (e) => {
        e.persist();
        setInputs(prev => (
            {...prev,
            [e.target.id]: e.target.value
            }
        ))
    }

    // Server state

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    })

    const handleServerResponse = (success, msg) => {
        setServerState({
          submitting: false,
          status: { success, msg }
        });

        if (success) {
            setInputs({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        setServerState({submitting: true});
        axios({
            method: "POST",
            url: process.env.REACT_APP_URL,
            data: inputs
        })
        .then(res => {
            handleServerResponse(true, "Thanks! Message was sent successfully.");
        })
        .catch(res => {
            handleServerResponse(false, "Something went wrong! Use my email instead. Thanks!")
        });
        setformSent(true);
    };
   
    return(
        <div id="contact" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.line}><span>Contact</span></h1>
            </div>

            <div className={styles.formContainer}>
                <div className={styles.formBox}>
                    <form onSubmit={handleOnSubmit}>
                        <h1>Contact me!</h1>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <input className={styles.input} maxLength="50" name="name" type="text" id="name" required value={inputs.name} onChange={handleOnChange}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input className={styles.input} maxLength="50" type="email" name="email" id="email" required value={inputs.email} onChange={handleOnChange}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="message">Message</label>
                            <textarea className={styles.textarea} name="message" id="message" cols="30" rows="10" required value={inputs.message} onChange={handleOnChange}></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <input className={styles.input} type="submit" value="Send" disabled={serverState.submitting}/>
                        </div>
                        <div className={styles.formGroup}>
                            {serverState.status && formSent ? <p className={serverState.status.success ? styles.successMsg : styles.errorMsg}>{serverState.status.msg}</p> : null}
                        </div>   

                    </form>
                </div>
            </div>

            <footer className={styles.footer}>
                <p>Jan Šotek © 2021</p>
            </footer>
        </div>
    )
}

export default Contact;