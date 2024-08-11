import React from "react";
import './Hero.css';
import CountUp from "react-countup";
import { UserAgent as ua } from 'user-agent';
import {BrowserView, MobileView} from 'react-device-detect';
import { HashLink } from "react-router-hash-link";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <h1>
                            Poczuj radość <br /> z rozwoju
                        </h1>
                    </div>

                    <div className="flexColStart hero-description">
                        <span className="secondaryText">Wiedza. Doświadczenie. Pasja. Zaangażowanie. <br />
                                                        Holistyczne spojrzenie na młodego człowieka. <br />
                                                        Miejsce, w którym  słuchamy rodziców, słuchamy dzieci i „szeroko” na nie patrzymy. <br />
                                                        Szukamy najlepszych rozwiązań, które pozwolą na rozwój dziecka. <br />
                        </span>         
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={100} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">ZADOWOLONYCH <br /> PACJENTÓW</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={20} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">LAT <br /> DOŚWIADCZENIA</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={50} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">ZDOBYTYCH <br /> CERTYFIKATÓW</span>
                        </div>
                    </div>

                    <div className="button-container">
                         <MobileView>
                            <a href="tel:602243373"><button className="contact-button">UMÓW SIĘ NA WIZYTĘ </button> </a>
                         </MobileView>
                        <BrowserView>
                            <HashLink to="#contact"><button className="contact-button">UMÓW SIĘ NA WIZYTĘ </button></HashLink>
                        </BrowserView>
                    </div>
                </div>
                {/* right side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./pic1.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;