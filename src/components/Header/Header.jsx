import React from "react";
import './Header.css';

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">

                <div className="flexCenter logo">
                    <img src="logo.png" alt="logo" height={65}/>
                    <div>Dobra wibracja</div>
                </div>
                
                <div className="flexCenter h-menu">
                    <a href="/">Strona główna</a>
                    <a href="/about">O mnie</a>
                    <a href="/services">Oferta</a>
                    <a href="/contact">Kontakt</a>
                    <a href="/goodtoknow">Warto wiedzieć</a>
                </div>

            </div>
        </section>
    )
}

export default Header;

