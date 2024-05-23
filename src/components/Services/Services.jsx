import './Services.css';
import diagnosis from "../../utils/diagnosis.json";
import therapies from "../../utils/therapies.json";
import { useState } from "react";

const Services = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
    setIsOpen(!isOpen);
    };

    return ( 
        <section className="services-wrapper">
            <div className="paddings innerWidth flexColCenter services-container">
                <h1>Diagnozy</h1>
                <ul className='mainList'>
                    {
                        diagnosis.map((diag, i) => {
                            let el_id = `diag${i}`;
                            return (
                                <li key={i} id={el_id} className='item'>
                                    <div className="diagName" onClick={toggleAccordion()}>{diag.name}</div>
                                    <div className={isOpen ? `ans ans_open` : `ans`}>
                                        <p className="regularText">Czas trwania: {diag.duration}</p>
                                        <p className="regularText">Spotkanie obejmuje: </p>
                                        <ul className='includesList'>
                                            {
                                                (diag.includes).map((item, j) => {
                                                    return (
                                                        <li key={j}>
                                                            <span className="regularText">{item.name}</span>
                                                            {
                                                                item.duration ? <p className="regularText">Czas trwania: {item.duration}</p>: null
                                                            }
                                                            {
                                                                item.description ? <p className="regularText">Opis: {item.description}</p>: null
                                                            }
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        {
                                            diag.description ? <p className='regularText'>Opis: {diag.description}</p> : null
                                        }
                                    </div>
                                    <br />
                                </li>
                            )
                        })
                    }
                </ul>
                <h1>Terapie</h1>
                <ul className='mainList'>
                    {
                        therapies.map((ther, i) => {
                            let el_id = `ther${i}`;
                            return (
                                <li key={i} id={el_id} className='item'>
                                    <span className="therName">{ther.name}</span>
                                    {
                                        ther.duration ? <p className="regularText">Czas trwania: {ther.duration}</p> : null
                                    }
                                    {
                                        ther.includes.length > 0 ? <p className="regularText">Spotkanie obejmuje: </p> : null
                                    }
                                    <ul className='includesList'>
                                        {
                                            (ther.includes).map((item, j) => (
                                                    <li key={j}>
                                                        <span className="regularText">{item}</span>
                                                    </li>
                                                )
                                            )
                                        }
                                    </ul>
                                    {
                                        ther.description ? <p className="regularText">{ther.description}</p> : null
                                    }
                                    {
                                        ther.target.length > 0 ? <p className="regularText">Terapia jest skierowana do:</p> : null
                                    }
                                    <ul className='targetList'>
                                        {
                                            (ther.target).map((item, j) => (
                                                    <li key={j}>
                                                        <span className="regularText">{item}</span>
                                                    </li>
                                                )
                                            )
                                        }
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

export default Services;