import React from 'react';
import styles from "./MyWork.module.css";

const MyWork = () => {

    return(
        <div id="mywork" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.line}><span>My work</span></h1>
            </div> 
            <div className={styles.listContainer}>
                <div className={styles.list1}>
                    <h1 className={styles.title}>Exercises</h1>
                    <ul>
                        <li>
                            <a className={styles.link} target="_blank" rel="noreferrer" href="https://github.com/JanSotek/burger-builder">Burger builder</a>
                            <button className={styles.showmore}>show more</button>
                            <div className={`animate__fadeIn animate__animated ${styles.description}`}>
                                <p className={styles.text}>React application about building your own burger!</p>
                            </div>
                        </li>
                        <li>
                            <a className={styles.link} target="_blank" rel="noreferrer" href="https://github.com/JanSotek/face-app-fe">Face App</a>
                            <button className={styles.showmore}>show more</button>
                            <div className={`animate__fadeIn animate__animated ${styles.description}`}>
                                <p className={styles.text}>React application with authentication and face recognition API.</p>
                            </div>
                        </li>
                        <li>
                            <a className={styles.link} target="_blank" rel="noreferrer" href="https://github.com/JanSotek/streams-fe">Streams</a>
                            <button className={styles.showmore}>show more</button>
                            <div className={`animate__fadeIn animate__animated ${styles.description}`}>
                                <p className={styles.text}>React-Redux application showing Twitch site functionality.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.list1}>
                    <h1 className={styles.title}>My projects</h1>
                    <ul>
                        <li> 
                            <a className={styles.link} target="_blank" rel="noreferrer" href="https://github.com/JanSotek/js-portfolio-website">Personal website</a>
                            <button className={styles.showmore}>show more</button>
                            <div className={`animate__fadeIn animate__animated ${styles.description}`}>
                                <p className={styles.text}>My playground. React application built on core principles. No pre-defined layouts.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyWork;