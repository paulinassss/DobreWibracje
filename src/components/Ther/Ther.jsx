import "./Ther.css";


const Ther = () => {
    return (
        <section className="services-wrapper" id='s'>
            <h1 className='offerTitle'>Terapie w Dobrych Wibracjach</h1>
            <div className="paddings innerWidth flexColCenter services-container">
            
            <div className="item paddings innerWidth">
                <h1>TERAPIA NEUROLOGOPEDYCZNA:</h1>
                <p className="diagName"><strong>Czas trwania:</strong> 45 minut</p>
                <p className="diagName marginTop ">Spotkanie obejmuje:</p>
                <ul className="includesList">
                    <li>Sesję terapeutyczną</li>
                    <li>Czas na rozmowę z rodzicem/opiekunem/dorosłym pacjentem, w celu ukierunkowania pracy w domu</li>
                </ul>
                <p className="diagName marginTop ">Terapia neurologopedyczna skierowana jest do osób z:</p>
                <ul className="targetList">
                    <li>wadami wymowy</li>
                    <li>zaburzeniami miofunkcjonalnymi</li>
                    <li>opóźnionym rozwojem mowy</li>
                    <li>afazją</li>
                    <li>niedosłuchem</li>
                    <li>zaburzeniami mowy i komunikacji wynikającymi z niepełnosprawności intelektualnej</li>
                    <li>zaburzeniami mowy i komunikacji wynikającymi z niedosłuchu</li>
                    <li>zaburzeniami mowy i komunikacji wynikającymi z zaburzeń ze spektrum autyzmu – autyzm, Zespół Aspergera</li>
                    <li>zaburzeniami mowy i komunikacji różnego pochodzenia</li>
                </ul>
            </div>
            <div className="item paddings innerWidth">
            <h1>TERAPIA JĄKANIA U DZIECI W WIEKU PRZEDSZKOLNYM</h1>
            <p className="diagName">Terapia interakcyjna rodzic-dziecko dla jąkających się dzieci w wieku do lat 7 metodą Palin PCI</p>
            <p className="diagName marginTop"><strong>Czas trwania sesji:</strong> 60 minut</p>
            <p className="diagName marginTop">Program obejmuje:</p>
            <ul className="includesList">
                <li><strong>I etap</strong> - 6 sesji terapeutycznych dla rodziców, w większości przypadków w obecności dziecka</li>
                <li><strong>II etap</strong> - 6 tygodni utrwalania efektów terapii w warunkach domowych</li>
                <li><strong>III etap</strong> – badanie kontrolne</li>
                <li><strong>IV etap</strong> – w zależności od wyników diagnozy kontrolnej: zakończenie terapii, powtórzenie I etapu lub wprowadzenie strategii ukierunkowanych na bezpośrednią pracę nad mową z aktywnym udziałem dziecka.</li>
            </ul>
            </div>


            <div className="item paddings innerWidth">
                <h1>TERAPIA JĄKANIA U DZIECI, MŁODZIEŻY I DOROSŁYCH</h1>
                <p className="diagName"><strong>Czas trwania:</strong> 45 minut</p>
                <p className="diagName marginTop">Spotkanie obejmuje:</p>
                <ul className="includesList">
                    <li>Sesję terapeutyczną.</li>
                    <li>Czas na rozmowę z rodzicem/opiekunem/dorosłym pacjentem, w celu ukierunkowania pracy w domu.</li>
                </ul>
                <p className="regularText marginTop">Możliwość zorganizowania grupowej terapii jąkania.</p>
                <p className="regularText">Istnieje możliwość zorganizowania zajęć psychoedukacyjno–instruktażowych dla rodziców dzieci jąkających się, by mogli lepiej zrozumieć problem dziecka i poznać najlepsze formy wsparcia. Zajęcia indywidualne lub grupowe.</p>
                <p className="regularText ">W przypadku zainteresowania ze strony rodziców, istnieje możliwość zorganizowania „Grupy wsparcia dla rodziców dzieci jąkających się”.</p>
            </div>
            

            <div className="item paddings innerWidth">
                <h1>TERAPIA I WSPARCIE DZIECI Z AFAZJĄ</h1>
                <p className="diagName "><strong>Czas trwania:</strong> 45 minut</p>
                <p className="diagName marginTop">Spotkanie obejmuje:</p>
                <ul className="includesList">
                    <li>Sesję terapeutyczną.</li>
                    <li>Czas na rozmowę z rodzicem, w celu ukierunkowania pracy w domu.</li>
                </ul>
                <p className="regularText marginTop">Istnieje możliwość zorganizowania zajęć psychoedukacyjno–instruktażowych dla rodziców dzieci z afazją, by mogli lepiej zrozumieć problem dziecka i poznać najlepsze formy wsparcia – indywidualnie lub grupowo.</p>
                <p className="regularText">W przypadku zainteresowania ze strony rodziców, istnieje możliwość zorganizowania „Grupy wsparcia dla rodziców dzieci z afazją”.</p>

            </div>
            
            </div>
        </section>

    );
};

export default Ther;
