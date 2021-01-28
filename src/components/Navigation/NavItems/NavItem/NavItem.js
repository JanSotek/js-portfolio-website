import React from 'react';
import styles from "./NavItem.module.css";

const NavItem = (props) => {
    return (
        <li className={styles.NavItem}>
            <span className={styles.menu}>{props.page}</span>
        </li>
        
    )
}

export default NavItem;