import './Services.css';
import diagnosis from "../../utils/diagnosis.json";
import therapies from "../../utils/therapies.json";

const Services = () => {
    return ( 
        <section className="services-wrapper">
            <div className="paddings innerWidth flexColCenter services-container">
                <h1>Diagnozy</h1>
                <ul className='mainList'>
                    {
                        diagnosis.map((diag, i) => {
                            return (
                                <li key={i} className='item'>
                                    <span className="diagName">{diag.name}</span>
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
                            return (
                                <li key={i} className='item'>
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