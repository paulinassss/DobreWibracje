import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Timeline from "./components/Timeline/Timeline";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Services from "./components/Services/Services";
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
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>

          <Footer/>
        </div>
    </Router>
  );
}

export default App;
