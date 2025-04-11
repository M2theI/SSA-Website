import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/vite-project/IMG_0566.jpg" alt="Somali Student Association Logo" className="logo" />
        <h2 className="logo-text">NEUSSA</h2>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
