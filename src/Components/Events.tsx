import { useState, useEffect } from 'react';
import { getPublicPath } from "../utils/publicPath";
import "./Events.css";

// TODO: Eventually replace this with data from our Google Calendar API
// Data for our end-of-semester event! Update this after each event
const upcomingEvent = {
  id: 1,
  title: "Next Event Coming Soon",
  date: "To Be Determined",
  time: "To Be Announced",
  location: "To Be Announced",
  description: "We're planning our next exciting event! Stay tuned for updates on our social media and website. Follow us to be the first to know when we announce the details."
};

// Mohamed - created this component on 4/10 for our upcoming event
const Events = () => {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);

  // Fade in the content when component mounts
  useEffect(() => {
    // Maybe add a small delay later? Looks fine for now
    setIsVisible(true);
  }, []);

  return (
    <div className={`events-section ${isVisible ? 'visible' : ''}`}>
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p className="events-intro">Join us at our upcoming events and be part of the Somali community at Northeastern.</p>
      </div>
      
      {/* Main event display - using a custom poster design */}
      <div className="events-container event-poster-container">
        <div className="event-card poster-card">
          {/* This custom poster matches our Instagram design */}
          <div className="event-poster-wrapper">
            <div className="event-poster-content">
              {/* Event details header */}
              <div className="event-poster-header">
                <h2>Coming Soon</h2>
                <h2>Stay Tuned</h2>
                <h2>Follow Us</h2>
              </div>
              
              {/* Fun circle element from the design */}
              <div className="event-poster-graphics">
                <div className="event-poster-circle">
                  <p>NEW</p>
                  <p>EVENT</p>
                  <p>SOON</p>
                </div>
              </div>
              
              {/* Main event title */}
              <div className="event-poster-title">
                <h1>TO BE ANNOUNCED</h1>
              </div>
              
              {/* "Join Us" text - positioned absolutely in CSS */}
              <div className="event-poster-join">
                <p>Stay Updated</p>
              </div>
              
              {/* Our logo in the corner */}
              <div className="event-poster-logo">
                <img src={getPublicPath("IMG_0566.jpg")} alt="NEUSSA Logo" className="small-logo" />
              </div>
            </div>
          </div>
          
          {/* Event details section below the poster for more info */}
          <div className="event-details">
            <h3>{upcomingEvent.title}</h3>
            <div className="event-meta">
              <p><i className="fas fa-calendar"></i> {upcomingEvent.date}</p>
              <p><i className="fas fa-clock"></i> {upcomingEvent.time}</p>
              <p><i className="fas fa-map-marker-alt"></i> {upcomingEvent.location}</p>
            </div>
            <p className="event-description">{upcomingEvent.description}</p>
            <button className="event-rsvp-btn">Follow for Updates</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 