import React from "react";
import "./Timeline.css";
import { FcCheckmark } from "react-icons/fc";

const Timeline = () => {
    return (
        <section className="flexCenter t-wrapper">
            <div className="innerWidth paddings flexSpace">
                <div>
                    <h2>Diagnozy</h2>
                    <ul className="flexColStart2 diag diag1">
                        <li><span>Podstawowa diagnoza logopedyczna</span></li>
                        <li><span>Diagnoza logopedyczna z oceną miofunkcjonalną</span></li>
                        <li><span>Pogłębiona diagnoza neurologopedyczna</span></li>
                        <li><span>Diagnoza jąkania i innych niepłynności mowy</span></li>
                    </ul>
                </div>
                <div>
                    <h2>Terapie</h2>
                    <ul className="flexColStart2 diag diag2">
                        <li><span>Terapia logopedyczna</span></li>
                        <li><span>Terapia miofunkcjonalna</span></li>
                        <li><span>Terapia neurologopedyczna</span></li>
                        <li><span>Terapia jąkania i innych niepłynności mowy</span></li>
                        <li><span>Grupowa terapia jąkania</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Timeline;