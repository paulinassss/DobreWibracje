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
                                <CountUp start={0} end={20} duration={4}/>
                            </span>
                            <span className="secondaryText">LAT <br /> DOŚWIADSCZENIA</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={47} duration={4}/>
                            </span>
                            <span className="secondaryText">ZDOBYTYCH <br /> CERTYFIKATÓW</span>
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