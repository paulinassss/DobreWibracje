import React from "react";
import "./Timeline.css";
import { FcCheckmark } from "react-icons/fc"
import { HashLink } from "react-router-hash-link";


const Timeline = () => {
    return (
        <section className="flexCenter t-wrapper">
            <div className="innerWidth paddings flexSpace">
                <div>
                    <div className="ti">Diagnozy</div>
                    <ul className="flexColStart2 diag diag1">
                        <li><HashLink to="/services#diag0"><span>Podstawowa diagnoza logopedyczna</span></HashLink></li>
                        <li><HashLink to="/services#diag1"><span>Pogłębiona diagnoza neurologopedyczna</span></HashLink></li>
                        <li><HashLink to="/services#diag2"><span>Diagnoza jąkania i innych niepłynności mowy dla dzieci</span></HashLink></li>
                        <li><HashLink to="/services#diag3"><span>Diagnoza jąkania i innych niepłynności mowy dla dorosłych</span></HashLink></li>
                    </ul>
                </div>
                <div>
                    <div className="ti">Terapie</div>
                    <ul className="flexColStart2 diag diag2">
                        <li><HashLink to="/services#ther0"><span>Terapia logopedyczna</span></HashLink></li>
                        <li><HashLink to="/services#ther1"><span>Terapia miofunkcjonalna</span></HashLink></li>
                        <li><HashLink to="/services#ther3"><span>Terapia neurologopedyczna</span></HashLink></li>
                        <li><HashLink to="/services#ther4"><span>Terapia jąkania i innych niepłynności mowy</span></HashLink></li>
                        <li><HashLink to="/services#ther4"><span>Grupowa terapia jąkania</span></HashLink></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Timeline;