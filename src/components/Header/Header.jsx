import React from "react";
import './Header.css';

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="nav-style">
                <div className="flexCenter paddings innerWidth h-container">

                    <div className="flexCenter logo">
                        <img src="logo.png" alt="logo" height={65}/>
                        <div>Dobre wibracje</div>
                    </div>
                    
                    <div className="flexCenter h-menu">
                        <a href="/">Strona główna</a>
                        <a href="/about">O mnie</a>
                        <a href="/services">Oferta</a>
                        <a href="/contact">Kontakt</a>
                        <a href="/goodtoknow">Warto wiedzieć</a>
                    </div>
                </div>
            </div>
            <div className="flexEnd paddings innerWidth phone-number">
                <span><pre>Zadzwoń i umów się   +48 602 243 373</pre></span>
            </div>
        </section>
    )
}

export default Header;

