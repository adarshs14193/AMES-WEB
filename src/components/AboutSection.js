
import React, { useEffect } from 'react';
import { useFadeUpOnScroll } from './useFadeUpOnScroll';
// import Spline from '@splinetool/react-spline';
import './AboutSection.css';

function AboutSection() {
  const fadeRefs = useFadeUpOnScroll();
  // Scroll to Teams Backbone if requested via navigation state
  useEffect(() => {
    if (window.location && window.history && window.history.state && window.history.state.usr && window.history.state.usr.scrollToTeams) {
      const section = document.getElementById('teams-backbone-section');
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, []);
  return (
    <section className="about-section">
      <div className="about-content">
  <h2 className="about-title premium-gradient zoom-in shimmer" ref={el => fadeRefs.current[0] = el}>About Us</h2>
  <div className="about-title-underline"></div>
        <div className="about-cards">
          {/* About NITK */}
          <div className="projects-card projects-row" ref={el => fadeRefs.current[1] = el}>
            <div className="projects-img-col">
              <div className="about-img about-img-nitk" />
            </div>
            <div className="projects-text-col">
              <h3 className="card-title">About NITK</h3>
              <div className="projects-card-text">
                Cultivate a culture of engineering excellence through shared knowledge and collaborative initiatives.<br />
                Bridge the academia-industry gap via projects & mentoring.<br />
                Promote interdisciplinary research & social innovation
              </div>
            </div>
          </div>
          {/* About AMES */}
          <div className="projects-card projects-row reverse" ref={el => fadeRefs.current[2] = el}>
            <div className="projects-img-col">
              <div className="about-img about-img-ames" />
            </div>
            <div className="projects-text-col">
              <h3 className="card-title">About AMES</h3>
              <div className="projects-card-text">
                Cultivate a culture of engineering excellence through shared knowledge and collaborative initiatives.<br />
                Bridge the academia-industry gap via projects & mentoring.<br />
                Promote interdisciplinary research & social innovation
              </div>
            </div>
          </div>
        </div>
        {/* Team Backbone Section */}
        <div style={{textAlign:'center', marginTop:'3.5rem', marginBottom:'0.5rem'}}>
          <span className="teams-backbone-heading">Teams Backbone</span>
        </div>
  <div className="teams-backbone-section" id="teams-backbone-section">
          <div className="teams-backbone-row">
            {[1,2].map((i) => (
              <div className="team-backbone-card large" key={i}>
                <div className="team-backbone-img large" />
                <div className="team-backbone-name">Name</div>
                <div className="team-backbone-role">Position</div>
              </div>
            ))}
          </div>
          <div className="teams-backbone-grid">
            {Array.from({length:8}).map((_,i) => (
              <div className="team-backbone-card" key={i}>
                <div className="team-backbone-img" />
                <div className="team-backbone-name">Name</div>
                <div className="team-backbone-role">Position</div>
              </div>
            ))}
          </div>
        </div>
        {/* Core Team Section */}
        <div style={{textAlign:'center', marginTop:'3.5rem', marginBottom:'0.5rem'}}>
          <span className="teams-backbone-heading">Core Team</span>
        </div>
        <div className="teams-backbone-grid">
          {Array.from({length:8}).map((_,i) => (
            <div className="team-backbone-card" key={i}>
              <div className="team-backbone-img" />
              <div className="team-backbone-name">Name</div>
              <div className="team-backbone-role">Position</div>
            </div>
          ))}
        </div>
        {/* Web Team Section */}
        <div style={{textAlign:'center', marginTop:'3.5rem', marginBottom:'0.5rem'}}>
          <span className="teams-backbone-heading">Web Team</span>
        </div>
        <div className="teams-backbone-grid">
          {Array.from({length:8}).map((_,i) => (
            <div className="team-backbone-card" key={i}>
              <div className="team-backbone-img" />
              <div className="team-backbone-name">Name</div>
              <div className="team-backbone-role">Position</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

export default AboutSection;
