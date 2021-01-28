import React, { useEffect } from 'react';
import NavItem from "./NavItem/NavItem";
import styles from "./NavItems.module.css";
import {NavHashLink} from "react-router-hash-link";

const NavItems = (props) => {

    const reference = React.createRef();

    const menuClicked = () => {
        props.navClick(false)
    }

    const handleClickOutside = event => {
        if (reference.current && !reference.current.contains(event.target) && event.target.nodeName !== "INPUT") {
            props.navClick(false);
        } else {
            return
        }
      };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    });

    return (
        <ul className={props.menu ? styles.showMenu : styles.NavItems} ref={reference}>
            <NavHashLink
            to="#"
            behaviour="instant"
            className={styles.link}
            onClick={menuClicked}
            >
                <NavItem page="Home"/>
            </NavHashLink>

            <NavHashLink
            to="#about"
            activeStyle={{ fontWeight: "bold" }}
            smooth="boolean"
            className={styles.link}
            onClick={menuClicked}
            >
                <NavItem page="About"/>
            </NavHashLink>

            <NavHashLink
            to="#skills"
            activeStyle={{ fontWeight: "bold" }}
            smooth="boolean"
            className={styles.link}
            onClick={menuClicked}
            >
                <NavItem page="Skills"/>
            </NavHashLink>

            <NavHashLink
            to="#mywork"
            activeStyle={{ fontWeight: "bold" }}
            smooth="boolean"
            className={styles.link}
            onClick={menuClicked}
            >
                <NavItem page="My Work"/>
            </NavHashLink>

            <NavHashLink
            to="#contact"
            activeStyle={{ fontWeight: "bold" }}
            smooth="boolean"
            className={styles.link}
            onClick={menuClicked}
            >
                <NavItem page="Contact"/>
            </NavHashLink> 
        </ul>
    )
}

export default NavItems;