import React from 'react';
import styles from "./Home.module.css";
import HomeImage from "../../../assets/images/foto_home.webp";

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={`animate__animated animate__slideInDown ${styles.text}`}>Hi, my name is</p>
                <p className={`animate__animated animate__fadeIn animate__delay-1s ${styles.header}`}>Jan Šotek</p>
                <p className={`animate__animated animate__fadeIn animate__delay-2s ${styles.text}`}>and I am</p>
                <p className={`animate__animated animate__fadeIn animate__delay-2s ${styles.header}`}>Web developer</p>
                 <p className={styles.text}>I would like to introduce to you my personal website including my current work and in-demand skills. I started building my first website as a little boy. After years spent in robotics, a seemingly similar industry, I felt the need to change my direction and that is when I decided to return to my original passion. <br/><br/> If you are interested in my services, please do not hesitate to contact me in one of the following ways. A free downloadable resume is available below.</p>
                <div className={styles.icons}>
                    <a className={styles.link} title="LinkedIn" target="_blank" rel="noreferrer" href="https://linkedin.com/in/jan-sotek"><i className={`${styles.linkedin} fab fa-linkedin`}></i></a>
                    <a className={styles.link} title="GitHub" target="_blank" rel="noreferrer" href="https://github.com/JanSotek"><i className={`${styles.github} fab fa-github-square`}></i></a>
                    <a className={styles.link} title="Email" href="mailto:honza.sotas@gmail.com"><i className={`${styles.email} far fa-envelope`}></i></a>
                    <a className={styles.link} title="My resume" href="./files/resume.pdf" download="resume.pdf"><i className={`${styles.resume} far fa-file`}></i></a>
                </div>
            </div>
                <img className="animate__fadeIn animate__animated" src={HomeImage} alt=""/>
        </div>
    )
}

export default Home;