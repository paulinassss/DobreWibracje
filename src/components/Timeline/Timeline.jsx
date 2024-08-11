import React from "react";
import "./Timeline.css";
import { FcCheckmark } from "react-icons/fc"
import { HashLink } from "react-router-hash-link";


const Timeline = () => {
    return (
        <section className="flexCenter t-wrapper">
            <div className="innerWidth paddings flexSpace">
                <div>
                    <div className="ti">Nasza oferta</div>
                    <ul className="flexColStart2 diag diag1">
                        <li><HashLink to="/services#diag0"><span>Neurologopeda</span></HashLink></li>
                        <li><HashLink to="/services#diag1"><span>Psycholog</span></HashLink></li>
                        <li><HashLink to="/services#diag3"><span>Terapia ręki</span></HashLink></li>
                        <li><HashLink to="/services#diag3"><span>Terapia i wsparcie dzieci z afazją</span></HashLink></li>
                        <li><HashLink to="/services#diag3"><span>Terapia małego dziecka z jąkaniem</span></HashLink></li>
                    </ul>
                </div>
                <div>
                    <div className="ti"><br /></div>
                    <ul className="flexColStart2 diag diag2">
                    <li><HashLink to="/services#diag2"><span>Trening Umiejętności Społecznych (TUS)</span></HashLink></li>
                    <li><HashLink to="/services#diag3"><span>Zajęcia ogólnorozwojowe dla dzieci w wieku 4-7 lat</span></HashLink></li>
                    <li><HashLink to="/services#diag3"><span>Trening uważności i koncentracji uwagi
                    </span></HashLink></li>
                    <li><HashLink to="/services#diag3"><span>Trening umiejętności wychowawczych „Szkoła dla Rodziców i Wychowawców”
                    </span></HashLink></li>
                    <li><HashLink to="/services#diag3"><span>Cykliczne wydarzenia z zakresu edukacji, wsparcia i rozwoju dzieci i młodzieży
                    </span></HashLink></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Timeline;