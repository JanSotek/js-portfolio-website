import React, { useState } from 'react';
import NavLogo from "./NavLogo/NavLogo";
import NavItems from "./NavItems/NavItems";
import styles from "./Toolbar.module.css";
import DarkModeBtn from "./DarkModeBtn/DarkModeBtn";
import GuessWhat from "./GuessWhat/GuessWhat";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Toolbar = () => {

    

    const [menuOpen, setMenuOpen] = useState(false)

    const clickMenu = (result) => {
        setMenuOpen(result)
    }

    return(
        <header className={styles.Toolbar}>
            <div>
                <NavLogo />
            </div>
            <nav>
                <GuessWhat />
                <NavItems menu={menuOpen} navClick={clickMenu}/>
                <HamburgerMenu menu={menuOpen} isClicked={clickMenu} /> 
            </nav>
            <div>
                <DarkModeBtn />
            </div>    
        </header>
    )
}

export default Toolbar;