import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  // Smooth scroll handler for Teams link
  const handleTeamsClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      // Already on About page, just scroll
      const section = document.getElementById("teams-backbone-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to About and trigger scroll after navigation
      navigate('/', { state: { scrollToTeams: true } });
    }
  };
  return (
    <header className="header screenshot-header">
      <div className="header-content screenshot-header-content">
  <div className="screenshot-header-logo"><img src="/ames.png" alt="AMES Logo" className="header-logo-img" /></div>
        <nav className="screenshot-header-nav">
          <Link to="/" className="screenshot-header-link">Home</Link>
          <Link to="/" className="screenshot-header-link">About</Link>
          <Link to="/projects" className="screenshot-header-link">Projects</Link>
          <a href="/#teams-backbone-section" className="screenshot-header-link" onClick={handleTeamsClick}>Teams</a>
          <Link to="/events" className="screenshot-header-link">Events</Link>
        </nav>
        <a href="#contact" className="screenshot-header-contact-btn">Contact</a>
      </div>
    </header>
  );
}

export default Header;