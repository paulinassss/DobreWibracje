import React, { useState } from "react";
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 1022){
            return {right: !menuOpened && "-100%"}
        }
    }
    return (
        <section className="h-wrapper">
            <div className="nav-style">
                <div className="flexCenter paddings innerWidth h-container">
                    <a href='/'>
                        <div className="flexCenter logo">
                            <img src="logo.png" alt="logo" height={65}/>
                            <div>Dobre wibracje</div>
                        </div>
                    </a>

                    <OutsideClickHandler onOutsideClick={()=>{
                        setMenuOpened(false);
                    }}>
                        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                            <Link to="/">Strona główna</Link>
                            <Link to="/about">O mnie</Link>
                            <Link to="/services">Oferta</Link>
                            <HashLink to="#contact">Kontakt</HashLink>
                        </div>
                    </OutsideClickHandler>

                    <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                        <BiMenuAltRight size={40} style = {{color: 'darkgreen'}}/>
                    </div>
                </div>
            </div>
            <div className="flexEnd paddings innerWidth phone-number">
                <div><pre>Zadzwoń i umów się   +48 602 243 373</pre></div>
            </div>
        </section>
    )
}

export default Header;

