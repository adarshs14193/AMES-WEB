import React from 'react';
import './App.css';
import Header from './components/Header';

import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import EventCalendar from './components/EventCalendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/contact';
const year = new Date().getFullYear();
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/events" element={<EventCalendar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Contact />
        <Footer />
        <div style={{ paddingLeft: '140px', paddingRight: '140px' }}><hr style={{
          border: 'none',
          height: '2px',
          borderTop: '2px dashed #f7842b',
          margin: '0px 0 0 0',
          paddingBottom: '27px'
        }} ></hr></div>
        <ul className="footer-bottom" >
          <li className="footer-text" >© {year} AMES. All rights reserved.</li>
          <li className="footer-text2" ><a href='*' style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a></li>
          <li className="footer-text3"><a href='*' style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a></li>
        </ul>
      </div>
    </Router>
  );
}

export default App;