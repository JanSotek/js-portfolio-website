import React, { useEffect, useState } from 'react';
import styles from "./DarkModeBtn.module.css";

const DARK_CLASS = "dark";

const DarkModeBtn = () => {

    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add(DARK_CLASS)
        } else {
            document.documentElement.classList.remove(DARK_CLASS)
        }
    }, [dark])

    return(
        <div className={styles.themeSwitchWrapper}>
            <label className={styles.themeSwitch} htmlFor="checkbox">
                <input className={styles.input} onChange={(e) => {setDark(e.target.checked)}} checked={dark} type="checkbox" id="checkbox" value={dark}/>
                <div className={`${styles.slider} ${styles.round}`}></div>
            </label>
            <em className={styles.lightUp}>{dark ? "Light up!" : "Go Dark!"}</em>
        </div>
    )
}

export default DarkModeBtn;