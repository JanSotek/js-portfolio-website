import React from 'react';
import styles from "./Skills.module.css";
import Bubble from "./Bubble/Bubble";

const Skills = () => {
    return(
        <div id="skills" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.line}><span>Skills</span></h1>
            </div> 
            <div className={styles.overflow}>
                <div>
                    <ul className={styles.bubbleContainer}>
                        <div className={styles.bubbleContainerLarge}>
                            <li>
                                <Bubble skillName={"React.js"} icon={"fab fa-react fa-7x"} largeBubble={`largeBubble`}/>
                            </li>
                            <li>
                                <Bubble skillName={"Javascript"} icon={"fab fa-js-square fa-7x"} largeBubble={`largeBubble`}/>
                            </li>
                            <li>
                                <Bubble skillName={"HTML 5"} icon={"fab fa-html5 fa-7x"} largeBubble={`largeBubble`}/>
                            </li>
                            <li>
                                <Bubble skillName={"CSS 3"} icon={"fab fa-css3-alt fa-7x"} largeBubble={`largeBubble`}/>
                            </li>
                        </div>
                        <div className={styles.bubbleContainerSmall}>
                            <li>
                                <Bubble skillName={"Redux"} smallBubble={`smallBubble`}/>
                            </li>
                            <li>
                                <Bubble skillName={"Rest API"} smallBubble={`smallBubble`}/>
                            </li>
                            <li>
                                <Bubble skillName={"GitHub"} icon={"fab fa-git fa-3x"} largeBubble={`smallBubble`}/>
                            </li>
                            <li>  
                                <Bubble skillName={"SASS/Modules"} icon={"fab fa-sass fa-3x"} smallBubble={`smallBubble`}/> 
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Skills;