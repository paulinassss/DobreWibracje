import './About.css';
import data from "../../utils/courses.json";

const About = () => {
    return (
        <section className="about-wrapper">
            <div className="paddings innerWidth about-container">
                <div className="flexCenter a-container">
                    <div className="hero-left">
                        <div className="hero-title">
                            <h1 className="highlight">
                                Witamy w Dobrych Wibracjach
                            </h1>
                        </div>
                        <div className="flexColStart">
                            <span className="regularText">
                            <br />To miejsce, gdzie
                            spotykają się wiedza, doświadczenie, entuzjazm i pasja, w trosce o rozwój młodego człowieka. Tu
                            góruje holistyczne spojrzenie na człowieka. Wspieramy rozwój dzieci oraz towarzyszymy ich rodzicom
                            w codziennych wyzwaniach. Wspólnie cieszymy się z każdej pozytywnej zmiany. W naszym centrum
                            dzieci uczą się i rozwijają w radosnej atmosferze, często przez zabawę, bez presji, doświadczając
                            satysfakcji z nabywanych umiejętności. Programy terapeutyczne są „szyte na miarę” - dopasowywane
                            do indywidualnych potrzeb każdego dziecka, aby zapewnić mu jak najlepsze efekty i wspierać jego
                            rozwój w optymalny sposób. Tworzymy miejsce, w którym każdy czuje się dobrze, otoczony troską i
                            wsparciem.
                            </span>
                        </div>
                    </div>
                    <div className="flexCenter hero-right">
                        <div className="image-container">
                            <img src="./image2.png" alt="logo"/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
};

export default About;