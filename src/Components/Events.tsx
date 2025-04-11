import { useState, useEffect } from 'react';
import { getPublicPath } from "../utils/publicPath";
import "./Events.css";

// Actual event data
const upcomingEvent = {
  id: 1,
  title: "End of The Semester",
  date: "Sunday, April 13",
  time: "1:00 PM - 4:00 PM",
  location: "Richardson Plaza",
  description: "Join us to celebrate the end of the semester with games, food, and fun! All Northeastern students are welcome to come hang out with the Somali Student Association."
};

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`events-section ${isVisible ? 'visible' : ''}`}>
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p className="events-intro">Join us at our upcoming events and be part of the Somali community at Northeastern.</p>
      </div>
      
      <div className="events-container event-poster-container">
        <div className="event-card poster-card">
          <div className="event-poster-wrapper">
            <div className="event-poster-content">
              <div className="event-poster-header">
                <h2>Sunday, April 13</h2>
                <h2>1 - 4 PM</h2>
                <h2>Richardson Plaza</h2>
              </div>
              
              <div className="event-poster-graphics">
                <div className="event-poster-circle">
                  <p>GAMES</p>
                  <p>FOOD</p>
                  <p>FUN</p>
                </div>
              </div>
              
              <div className="event-poster-title">
                <h1>END OF THE SEMESTER</h1>
              </div>
              
              <div className="event-poster-join">
                <p>Join Us</p>
              </div>
              
              <div className="event-poster-logo">
                <img src={getPublicPath("IMG_0566.jpg")} alt="NEUSSA Logo" className="small-logo" />
              </div>
            </div>
          </div>
          
          <div className="event-details">
            <h3>{upcomingEvent.title}</h3>
            <div className="event-meta">
              <p><i className="fas fa-calendar"></i> {upcomingEvent.date}</p>
              <p><i className="fas fa-clock"></i> {upcomingEvent.time}</p>
              <p><i className="fas fa-map-marker-alt"></i> {upcomingEvent.location}</p>
            </div>
            <p className="event-description">{upcomingEvent.description}</p>
            <button className="event-rsvp-btn">RSVP Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 