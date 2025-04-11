import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./HeroSection.css";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const basePath = process.env.VERCEL ? '' : '/SSA-Website';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">Somali Student Association At Northeastern University</h1>
        <div className="hero-image">
          <img 
            src={`${basePath}/IMG_0567.jpg`}
            alt="SSA at Northeastern"
            className="hero-img"
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