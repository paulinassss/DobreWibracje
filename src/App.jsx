import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import Specialists from "./components/Specialists/Specialists";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import About_MK from "./components/About_MK/About_MK";
import About_OLK from "./components/About_OLK/About_OLK";
import Ther from "./components/Ther/Ther";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<><Hero /><Timeline /><Reviews /></>}/>
            <Route path="/about" element={<><About /> <Specialists /></>}/>
            <Route path="/services" element={<Services />} />
            <Route path="/about_mk" element={<About_MK />} />
            <Route path="/about_olk" element={<About_OLK />} />
            <Route path="/ther" element={<Ther />} />
          </Routes>

          <Footer/>
        </div>
    </Router>
  );
}

export default App;
