import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Download from "./components/Download/Download";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Questions from "./components/FAQ/Questions";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <HeroSection />
        <Features />
        <Download />
        <Questions />
        <Newsletter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
