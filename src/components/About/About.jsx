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
                                Dzień dobry! <br />
                                Nazywam się <br />
                                Małgorzata Kindlik.
                            </h1>
                        </div>
                        <div className="flexColStart">
                            <span className="regularText">Jestem neurologopedką, pedagożką, terapeutką
                                miofunkcjonalną i terapeutką karmienia. Do swojej pracy przez całe życie podchodziłam z pasją i wielkim zaangażowaniem. Jestem osobą, która robi coś na „maxa”, albo nie robi wcale. 
                        </span>
                        </div>
                    </div>
                    <div className="flexCenter hero-right">
                        <div className="image-container">
                            <img src="./myPic.png" alt="picture of a woman"/>
                        </div>
                    </div>
                </div> 
                <div className='mainContent regularText'>
                    <p className="highlight quote">
                        Holistyczne podejście do człowieka i jego problemu to najskuteczniejsza forma pomocy.
                    </p>
                    <p>
                        Staram się patrzeć na człowieka w sposób holistyczny, widząc go jako całość, a nie jedynie jako problem, z którym się zgłasza. Doświadczenia w takim spojrzeniu nabywałam dzięki wieloletniej pracy w placówkach poradnictwa psychologiczno - pedagogicznego dla dzieci i młodzieży. Mam również doświadczenie, w tym bardzo osobiste, w pracy z osobami dorosłymi, które utraciły możliwość słownego porozumiewania się.
                    </p>
                    <p className="highlight quote">
                        Diagnoza to kluczowy element całej układanki.
                    </p>
                    <p>
                        Bardzo często po przeprowadzonej ocenie mowy proponuję Państwu konsultacje u innych specjalistów (ortodonty, laryngologa, audiologa, neurologa, fizjoterapeuty, psychologa)  wiedząc, że interdyscyplinarne podejście jest najskuteczniejsze i najszybsze w osiąganiu zamierzonych efektów.
                    </p>
                    <p className="highlight quote">
                        Dobra terapia wymaga współpracy, zaangażowania i radości z tego co robimy.
                    </p>
                    <p>
                        Aby terapia była skuteczna konieczne jest zaangażowanie, motywacja i wzajemna sympatia. Wtedy naprawdę 
                        można przenosić góry!!!
                    </p>
                    <p>
                        W pracy z dziećmi, szczególnie młodszymi, staram się duuuużo zadań realizować poprzez wspólną, kierowaną zabawę, gdyż właśnie w ten sposób dzieci uczą się najchętniej, najszybciej i najskuteczniej (potwierdzają to badania naukowe!). Więc proszę się nie dziwić, gdy usłyszycie Państwo od swoich pociech, że  na zajęciach bawiły się, grały w gry. Będzie tego sporo i proszę mi zaufać – to naprawdę przyniesie efekty. Szczególnie, gdy przekazywane i omawiane na koniec zajęć zadania i ćwiczenia będziecie kontynuować w domu.
                    </p>
                    <p>
                        Oprócz pracy z dzieckiem niezwykle ważna jest dla mnie praca z Rodzicem - ekspertem od swojego dziecka. Bo przecież nikt lepiej nie zna swojego dziecka niż  mama i tata! Nikomu bardziej nie zależy na dziecku niż Wam, Rodzicom !
                    </p>
                    <p>
                        Prowadząc terapię z osobami dorosłymi pracuję w taki sposób, by nie poczuli się oni jak dzieci. Poruszamy tematy ważne i interesujące dla osób dojrzałych, wykorzystujemy pomoce dla dorosłych.
                    </p>
                    <p>
                        Wierzę we współpracę i świadomość dotyczącą tego co robimy na terapii i po co to robimy.
                    </p>
                    <p className="highlight quote">
                        Moje dobre, prywatne życie...
                    </p>
                    <p>
                        Prywatnie jestem szczęśliwą żoną,  mamą dwóch najcudowniejszych na świecie synów.  Posiadam małego pieska, którego radość, gdy wracam do domu oraz nieustanna chęć przytulania się sprawiają, że stresy codzienności szybko znikają. Interesuję się filmem i literaturą. W wolnym czasie chodzę na  piesze wycieczki po lasach, górach, łąkach i kniejach. Lubię podróżować, poznawać różne zakątki naszego pięknego kraju i świata. Chętnie spotykam się z ludźmi,  słucham ich i rozmawiam. I bardzo, bardzo lubię się śmiać.
                    </p>
                    <p className="highlight quote">
                        Wiem, jak to jest być mamą...
                    </p>
                    <p>
                        Mam wielkie szczęście  łączyć zdobytą jako pedagog i neurologopeda wiedzę z rolą mamy. Próbowałam, sprawdzałam, analizowałam.  Popełniałam błędy, myliłam się. I wyciągałam wnioski. Modyfikowałam swoje przekonania i zachowania. Szukałam tego co dobre dla moich dzieci, dla mnie, dla nas, dla naszej rodziny, ale nigdy, przenigdy nie odpuszczałam bycia  z nimi w relacji. Uczyłam się jak być dobrą mamą, wspierającą, kochającą, ale też wymagającą i stawiającą granice. Dziś wiem, że było warto.
                    </p>
                    <p>
                        Staram się dzielić z Państwem swoimi doświadczeniami, podpowiadać w sprawach wychowania i edukacji.
                    </p>
                    <p className="highlight quote">
                        I ciągle się uczę…
                    </p>
                    <p>
                        W ciągu wieloletniej pracy zawodowej nieustannie staram się rozwijać i zwiększać swoje kompetencje, zarówno w zakresie logopedii, neurologopedii, jak i obszarów dotyczących wychowania. Ukończyłam ponad 50  szkoleń i kursów.
                    </p>
                    <p className='title'>Oto lista kursów i szkoleń:</p>
                    <ol>
                        {
                            data.map((course, i) => {
                                return (
                                    <li key={i}>
                                        <p className="title">"{course.name}"</p>
                                        <p className="regularText">{course.details}</p>
                                        { i == 10 ? <ul>
                                            <li>Moduł I – Refleksja nad motywowaniem w praktyce. – 3 godziny</li>
                                            <li>Moduł II - Jak motywować i inspirować ucznia? – 3 godziny</li>
                                            <li>Moduł III – Jak motywować i inspirować całą grupę? – 3 godziny</li>
                                        </ul>
                                        : null }
                                        <br />
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default About;