import React from 'react';
import styles from "./Panel.module.css";

const Panel = (props) => {
    return(
        <div className={styles.container}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Panel;