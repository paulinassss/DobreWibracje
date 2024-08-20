import React from "react";
import "./Specialists.css";
import { FcCheckmark } from "react-icons/fc"
import { HashLink } from "react-router-hash-link";


const Specialists = () => {
    return (
        <section className="flexCenter t-wrapper">
            <div className="innerWidth paddings flexSpace">
            <div className="innerWidth paddings flexSpace">
                <div>
                    <div className="ti">Nasi Specjaliści</div>
                    <ul className="flexColStart2 diag diag1">
                        <li><HashLink smooth to="/about_mk#mk"><span>Neurologopeda Małgorzata Kindlik</span></HashLink></li>
                        <li><HashLink to="/about_olk#olk"><span>Psycholog Oktawia Łagowska Korneluk </span></HashLink></li>
                    </ul>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Specialists;