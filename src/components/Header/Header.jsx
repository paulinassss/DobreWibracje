import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
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
                    <div className="flexCenter h-menu">
                        <Link to="/">Strona główna</Link>
                        <Link to="/about">O mnie</Link>
                        <Link to="/services">Oferta</Link>
                        <Link to="/contact">Kontakt</Link>
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

