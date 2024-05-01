import React from "react";
import './Hero.css';
import CountUp from "react-countup";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
                <div className="hero-left">
                    <div className="hero-title">
                        <h1>
                            Odkryj <br />
                            moc swojego <br />
                            głosu
                        </h1>
                    </div>

                    <div className="flexColStart hero-description">
                        <span className="secondaryText">Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.</span>
                        <span className="secondaryText">Leo vel fringilla est ullamcorper. Integer feugiat scelerisque varius morbi.</span>
                    </div>

                    <div className="flexStart stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={100} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">ZADOWOLONYCH <br /> PACJENTÓW</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={22} duration={4}/>
                            </span>
                            <span className="secondaryText">LAT <br /> DOŚWIADCZENIA</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={53} duration={4}/>
                            </span>
                            <span className="secondaryText">ZDOBYTE <br /> CERTYFIKATY</span>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./heroImage.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;