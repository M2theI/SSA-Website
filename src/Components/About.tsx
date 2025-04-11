import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h1>About NEUSSA</h1>
        
        <div className="about-text">
          <p>
            NEUSSA is a segway between institutions to promote uplift, and unite the Boston Somali 
            community and work to foster connections between Somali college students.
          </p>
          
          <p>
            Our goal is to serve Northeastern University's Somali students and those in the 
            Northeastern community interested in Somalia. The organization is also formed to bring 
            light of Somalia's culture and ethnicity to the campus-wide audience and raise awareness 
            about our culture, politics, religion, and general history.
          </p>
          
          <p>
            In addition, NEUSSA is also formed to connect Somali college Students and create a forum 
            to interact about the current and future state of Somalia.
          </p>

          <div className="mission-areas">
            <h2>Our Critical Areas</h2>
            <div className="area-cards">
              <div className="area-card">
                <h3>Mentorship</h3>
                <p>
                  Establishing channels of mentorship for current and future NEU Somali students, 
                  and playing a role as a motivator and role model for Boston Area Students 
                  (Middle & High Schools).
                </p>
              </div>

              <div className="area-card">
                <h3>Academic Enrichment</h3>
                <p>
                  Focusing on academic enrichment for Northeastern Somali Students.
                </p>
              </div>

              <div className="area-card">
                <h3>Community Engagement</h3>
                <p>
                  Engaging the local Somali community on relevant local Somali causes and issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 