import React from 'react';
import styles from "./About.module.css";
import Panel from "./Panel/Panel";
import { useInView } from 'react-intersection-observer';

const About = () => {

    const { ref, inView} = useInView({
        root: null,
        threshold: 0.5,
        triggerOnce: true,
        delay: 200,
      });
    
    const textField = {
        gridContainer: {
            grid1: {
                title: "Who am I",
                text: "32 years old. Living in Prague. Happily married. Loving my wife, traveling, cooking & eating good food and gaming."
            },
            grid2: {
                title: "My experience",
                text: "Self-taught programming experience from various courses on Udemy. Years of cooperation with customers in the automatization industry."
            },
            grid3: {
                title: "My vision",
                text: "Keeping up with modern technologies and using them to make clients and also my life easier."
            },
            grid4: {
                title: "My education and work",
                text: "Engineering high school and unfinished University of Mechatronics and Logistics. Employed for many years as robotic simulation specialist."
            }
        }
    }

    const renderContent = () => {

        return(
            <React.Fragment>
        <div className={`animate__animated animate__fadeIn ${styles.gridItem1}`}>
            <Panel title={textField.gridContainer.grid1.title} text={textField.gridContainer.grid1.text}/>
        </div>
        <div className={`animate__animated animate__fadeIn ${styles.gridItem2}`}>
            <Panel title={textField.gridContainer.grid2.title} text={textField.gridContainer.grid2.text}/>
        </div>
        <div className={`animate__animated animate__fadeIn ${styles.gridItem3}`}>
            <Panel title={textField.gridContainer.grid3.title} text={textField.gridContainer.grid3.text}/>
        </div>
        <div className={`animate__animated animate__fadeIn ${styles.gridItem4}`}>
            <Panel title={textField.gridContainer.grid4.title} text={textField.gridContainer.grid4.text}/>
        </div>
            </React.Fragment>
        )
    }
    
    return(
        <div id="about" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.line}><span>About me</span></h1>
            </div>
            <div ref={ref} className={styles.gridContainer}>

                {inView ? renderContent() : null}

            </div>
        </div>
    )
}

export default About;