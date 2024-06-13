import './Services.css';
import diagnosis from "../../utils/diagnosis.json";
import therapies from "../../utils/therapies.json";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import chevronDown from '../../../public/chevron.svg';
import { useState } from 'react';
import ScrollToTop from "./components/ScrollToTop";

const Services = () => {
    return ( 
        <section className="services-wrapper">
            <div className="paddings innerWidth flexColCenter services-container">
                <h1>Diagnozy</h1>
                <Accordion transition transitionTimeout={250} className='mainList'>
                    {
                        diagnosis.map((diag, i) => {
                            let el_id = `diag${i}`;
                            const [rotateChevron, setRotateChevron] = useState(false);
                            const handleRotate = () => setRotateChevron(!rotateChevron);
                            return (
                                <AccordionItem key={i} id={el_id} onClick={handleRotate} className='item' header={
                                    <>
                                    {diag.name}
                                    <img src={chevronDown} className={`chevron-icon ${rotateChevron ? "rotate" : ""}`}/>
                                    </>
                                }>
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
                                                            item.description ? <p className="regularText">{item.description}</p>: null
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {
                                        diag.description ? <p className='regularText'>{diag.description}</p> : null
                                    }
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
                <h1>Terapie</h1>
                <Accordion transition transitionTimeout={250} className='mainList'>
                    {
                        therapies.map((ther, i) => {
                            let el_id = `ther${i}`;
                            const [rotateChevron, setRotateChevron] = useState(false);
                            const handleRotate = () => setRotateChevron(!rotateChevron);
                            return (
                                <AccordionItem key={i} id={el_id} onClick={handleRotate} className='item' header={
                                    <>
                                    {ther.name}
                                    <img src={chevronDown} className={`chevron-icon ${rotateChevron ? "rotate" : ""}`}/>
                                    </>
                                }>
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
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </section>
    );
};
export default Services;