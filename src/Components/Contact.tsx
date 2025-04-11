import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h1>Connect with NEUSSA</h1>
        <p className="contact-intro">Stay connected with us through our social media channels!</p>
        
        <div className="social-links">
          <a 
            href="https://www.instagram.com/_neussa/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <i className="fab fa-instagram"></i>
            <span>Follow us on Instagram</span>
            <span className="username">@_neussa</span>
          </a>

          <a 
            href="https://www.tiktok.com/@neusomalis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link tiktok"
          >
            <i className="fab fa-tiktok"></i>
            <span>Follow us on TikTok</span>
            <span className="username">@neusomalis</span>
          </a>

          <a 
            href="https://chat.whatsapp.com/HAI8LxpboCSLG6NMG4RiEh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
            <span>Join our WhatsApp Group</span>
            <span className="username">NEUSSA Main Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 