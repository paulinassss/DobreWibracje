import './Services.css';
import diagnosis from "../../utils/diagnosis.json";
import therapies from "../../utils/therapies.json";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import chevronDown from '../../../public/chevron.svg';
import { useState } from 'react';
import { HashLink } from "react-router-hash-link";
// import ScrollToTop from "./components/ScrollToTop";

const Services = () => {
    return ( 
        <section className="services-wrapper">
            <h1 className='offerTitle'>Oferta Dobrych Wibracji</h1>
            <div className="paddings innerWidth flexColCenter services-container">
                <div className="item paddings innerWidth">
                    <h1>DIAGNOZA</h1>
                    <p className='diagName'>W Dobrych Wibracjach prowadzimy diagnozy logopedyczne, neurologpedyczne oraz psychologiczne.
                    <br /><br />Diagnoza jest konieczną podstawą rozpoczęcia terapii, opartej na stworzonym indywidualnym
                    programie, dopasowanym do aktualnych potrzeb i możliwości danej osoby oraz do jej
                    aktualnego poziomu rozwoju mowy i komunikacji. <br />
                    <br />Po diagnozie może zostać wydana opinia logopedyczna/neurologopedyczna (czas oczekiwania
                    na dokument - do 7 dni) <br /><br /></p>
                    <ul className="diag item marginTop">
                        <li><HashLink smooth to="/diag#s"><span>Sprawdź pełną ofertę DIAGNOZ w Dobrych Wibracjach</span></HashLink></li>
                    </ul>
                </div>
               
                
               
                <div className="item paddings innerWidth">
                <h1 className=''>TERAPIA</h1>
                
                <p className='diagName'>Podstawą rozpoczęcia terapii jest przeprowadzenie diagnozy podstawowej (w przypadku osób z
                    wadami wymowy i zaburzeniami miofunkcjonalnymi) oraz pogłębionej diagnozy
                    neurologopedyczna (w przypadku osób z innymi zaburzeniami). <br /><br /> 
                    Terapia to cyklicze spotkania z terapeutą, podczas których realizowany jest program terapeutyczny. <br /><br /> </p>
                <ul className="diag item marginTop">
                    <li><HashLink smooth to="/ther#s"><span>Sprawdź pełną ofertę TERAPII w Dobrych Wibracjach</span></HashLink></li>
                </ul>
                </div>

                <div className="item paddings innerWidth">
                <h1 className=''>ZAJĘCIA GRUPOWE</h1>
                
                <p className='diagName'> W Dobrych Wibracjach oferujemy również zajęcia grupowe, które są doskonałym uzupełnieniem terapii indywidualnej. <br /><br /> W zajęciach grupowych dzieci mają możliwość rozwijania swoich umiejętności językowych w grupie rówieśniczej, co sprzyja nawiązywaniu relacji społecznych, rozwijaniu umiejętności komunikacyjnych oraz współpracy z innymi dziećmi. <br /><br /> </p>

                <ul className="diag item marginTop">
                    <li><HashLink smooth to="/group#s"><span>Sprawdź pełną ofertę ZAJĘĆ GRUPOWYCH w Dobrych Wibracjach</span></HashLink></li>
                </ul>
                </div>

            </div>
            <h1 className='offerTitle'>Zadzwoń i umów się na wizytę!</h1>
        </section>
    );
};
export default Services;