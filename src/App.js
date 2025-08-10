import React from 'react';
import './App.css';
import Header from './components/Header';

import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import EventCalendar from './components/EventCalendar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;