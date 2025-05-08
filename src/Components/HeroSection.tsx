import { useNavigate } from 'react-router-dom';
import "./HeroSection.css";
import heroImg from '../assets/IMG_0567.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Somali Student Association At Northeastern University</h1>
        <div className="hero-image">
          <img 
            src={heroImg}
            alt="SSA at Northeastern"
            className="hero-img"
            loading="eager"
            decoding="sync"
          />
        </div>
        <div className="hero-cta">
          <button onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 