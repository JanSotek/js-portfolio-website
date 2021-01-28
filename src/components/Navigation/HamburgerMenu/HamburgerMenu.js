import React from 'react';
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = (props) => {

    const menuClicked = () => {
        props.isClicked(!props.menu)
    }

    return(
        <div className={styles.menuToggle}>
            <input type="checkbox" name="" id="" onClick={menuClicked}/>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default HamburgerMenu;