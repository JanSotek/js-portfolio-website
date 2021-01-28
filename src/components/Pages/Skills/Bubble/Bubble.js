import React from 'react';
import styles from "./Bubble.module.css";

const Bubble = (props) => {
    return(
        <div className={`${styles[props.largeBubble]} ${styles[props.smallBubble]}`}>
            <p>{props.skillName}</p>
            <i className={props.icon}></i>
        </div>
    )
}

export default Bubble;