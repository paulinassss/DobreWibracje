import './About_OLK.css';
import data from "../../utils/courses.json";

const About = () => {
    return (
        <section className="about-wrapper">
            <div id="olk" className="paddings innerWidth about-container">
                <div className="flexCenter a-container">
                    <div className="hero-left">
                        <div className="hero-title">
                            <h1 className="highlight">
                                
                                Nazywam się <br />
                                Oktawia Łagowska Korneluk.
                            </h1>
                        </div>
                        <div className="flexColStart">
                            <span className="regularText"><br />Z wykształcenia jestem psychologiem, oligofrenopedagogiem, skończyłam studia
                            podyplomowe z zakresu wczesnego wspomagania rozwoju dziecka oraz diagnozy i terapii
                            osób z autyzmem. Jestem również certyfikowanym terapeutą TUS I i II stopnia. Są mi bliskie
                            założenia metody skoncentrowanej na rozwiązaniach.
                            </span>
                        </div>
                    </div>
                    <div className="flexCenter hero-right">
                        <div className="image-container">
                            <img src="./Oktawia.jpg" alt="picture of a woman"/>
                        </div>
                    </div>
                </div> 
                <div className='mainContent regularText'>
                    <p className="highlight quote">
                        Stawiam na ciągły rozwój i naukę
                    </p>
                    <p>
                    Lubię zdobywać nową wiedzę poprzez udział w szkoleniach, konferencjach, zapoznawanie
się z treściami fachowej literatury. W bieżącej pracy korzystam z założeń różnych metod, by
oddziaływania jak najbardziej odpowiadały indywidualnym potrzebom mojego Klienta.
Swoje doświadczenie zdobywanym w pracy terapeutycznej oraz diagnostycznej, pracuję z
dziećmi i młodzieżą w prywatnym gabinecie, jak i w systemie oświaty. Prowadzę także
konsultacje dla rodziców.</p>
                    <p className="highlight quote">
                        Dobra atmosfera i kontakt z dzieckiem to podstawa
                    </p>
                    <p>
                    W swojej pracy za cel stawiam sobie wspomaganie młodego człowieka w nabywaniu
kompetencji społecznych, emocjonalnych, poznawczych oraz w procesie podejmowanych
przez niego zmian. Istotne jest dla mnie nawiązanie dobrego kontaktu i stworzenie
bezpiecznej atmosfery, co ma znaczący wpływ na efekty podejmowanych oddziaływań. Dążę
do holistycznego podejścia do dziecka i jego rodziny.
                    <br /> Jestem osobą energiczną, otwartą na nowe wyzwania, pozytywnie nakręconą pasjonatką
                    wykonywanej pracy.
                    </p>

                
                </div>
            </div>
        </section>
    );
};

export default About;