import React from 'react';
import Logo from "../../../assets/images/logo_transparent.png";
import styles from "./NavLogo.module.css";
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";

const NavLogo = () => {
    return (
        <div className={styles.Logo}>
            <NavHashLink
            to="#"
            behaviour="instant"
            >
                <img src={Logo} alt="Jan Šotek - Web developer"/>
            </NavHashLink>
            <Link to="#home">
                
            </Link>
        </div>
    )
}

export default NavLogo;