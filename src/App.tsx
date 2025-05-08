import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import "./App.css";

// Main App component with routing configuration
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
