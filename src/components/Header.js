import React from 'react';
import './Header.css';
import logo from '../assets/logo3.png';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className={`navbar`}>
      <div className="logo-section">
        <a href='/'><img src={logo} alt="AMES Logo" className="logo-img" /></a>
      </div>
      <ul className={`nav-links`}>
        <li><a className="object" href="/">Home</a></li>
        <li>
          <a
            href="/About"
            className="object nav-button"

          >
            About
          </a>
        </li>
        <li>
          <a href="/projects" className='object'>Projects</a>
        </li>
        {/* <li>
          <Link className="object nav-button" to="/events">Events</Link>
        </li> */}
        <li>
          <a
            href="/Footer"
            className="object nav-button"

          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
