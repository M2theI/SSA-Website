import { useState, useEffect } from 'react';
import { getPublicPath } from "../utils/publicPath";
import "./Events.css";

// Sample event data - in a real app, this would come from an API or database
const sampleEvents = [
  {
    id: 1,
    title: "General Body Meeting",
    date: "June 15, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "Curry Student Center, Room 348",
    description: "Join us for our monthly general body meeting to discuss upcoming activities and initiatives.",
    image: "https://images.unsplash.com/photo-1559223607-a43f990c3fb0?q=80&w=1950&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Cultural Night",
    date: "July 10, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Blackman Auditorium",
    description: "An evening celebrating Somali culture through traditional music, dance, food, and art.",
    image: "https://images.unsplash.com/photo-1572805223665-a483a31a4972?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Career Networking Workshop",
    date: "August 5, 2025",
    time: "5:00 PM - 7:00 PM",
    location: "Shillman Hall, Room 220",
    description: "Connect with Somali professionals in various industries and gain valuable career insights.",
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=1740&auto=format&fit=crop"
  }
];

const Events = () => {
  const [events, setEvents] = useState(sampleEvents);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // In a real app, you would fetch events from an API here
    // Example:
    // const fetchEvents = async () => {
    //   try {
    //     const response = await fetch('https://your-api.com/events');
    //     const data = await response.json();
    //     setEvents(data);
    //   } catch (error) {
    //     console.error('Error fetching events', error);
    //   }
    // };
    // fetchEvents();
  }, []);

  return (
    <div className={`events-section ${isVisible ? 'visible' : ''}`}>
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <p className="events-intro">Join us at our upcoming events and be part of the Somali community at Northeastern.</p>
      </div>
      
      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <div className="event-date-badge">
                {event.date.split(', ')[0]}
              </div>
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <div className="event-meta">
                <p><i className="fas fa-calendar"></i> {event.date}</p>
                <p><i className="fas fa-clock"></i> {event.time}</p>
                <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
              </div>
              <p className="event-description">{event.description}</p>
              <button className="event-rsvp-btn">RSVP Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events; 