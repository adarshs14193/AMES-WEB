import React, { useEffect, useState, useRef } from "react";
import { useFadeUpOnScroll } from './useFadeUpOnScroll';
import useTypewriter from './useTypewriter';
import './ProjectsSection.css';
import eventsData from "../Data/project.js";
import ImageCarousel from './ImageCarousel';
import aboutImage from '../assets/pro.png';
import objectivesImage from '../assets/pro.png';

let scrollToEventSection = () => { };
const AUTO_NEXT_INTERVAL = 4000; // 4 seconds

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [barKey, setBarKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % eventsData.length);
      setBarKey((k) => k + 1);
    }, AUTO_NEXT_INTERVAL);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleClick = (idx) => {
    setActiveIndex(idx);
    setBarKey((k) => k + 1);
  };

  const eventRef = useRef(null);

  useEffect(() => {
    scrollToEventSection = () => {
      eventRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  }, []);

  const fadeRefs = useFadeUpOnScroll();
  const typewriter = useTypewriter();
  
  return (
    <section className="projects-section">
      <div className="projects-content">
        <h2
          className={
            `projects-title typewriter-title zoom-in shimmer${fadeRefs.current[0] && fadeRefs.current[0].classList && fadeRefs.current[0].classList.contains('fade-up') ? ' fade-up' : ''}`
          }
          ref={el => fadeRefs.current[0] = el}
        >
          {typewriter}
          <span className="typewriter-cursor">|</span>
        </h2>
        <div
          className={`carousel-fade-up${fadeRefs.current[1] && fadeRefs.current[1].classList && fadeRefs.current[1].classList.contains('fade-up') ? ' fade-up' : ''}`}
          ref={el => fadeRefs.current[1] = el}
        >
          <ImageCarousel />
        </div>
      </div>
      
      {/* Fresh About Section */}
      <div className="about-section">
        {/* First Row: About Us */}
        <div className="about-content-wrapper">
          <div className="about-text">
            <span className="about-us-label">WHO ARE WE?</span>
            <div className="about-underline"></div>
            <h2 className="about-title">Who are we?</h2>
            <p className="about-desc">
              AMES is a dynamic platform by and for Mechanical Engineering students at NITK. We empower each other with hands-on learning, industry insights, and lifelong connections.
            </p>
            <button className="about-btn">KNOW MORE</button>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Graduation" />
          </div>
        </div>
      
        {/* Second Row: Objectives */}
        <div className="about-content-wrapper">
          <div className="about-image2">
            <img src={objectivesImage} alt="Classroom" />
          </div>
          <div className="about-text2">
            <span className="about-us-label">OBJECTIVES</span>
            <div className="about-underline"></div>
            <h2 className="about-title">Objectives That Drives Us</h2>
            <ul className="about-desc">
              <li>Cultivate a culture of engineering excellence through shared knowledge and collaborative initiatives.</li>
              <li>Bridge the academia-industry gap via projects & mentorship.</li>
              <li>Promote interdisciplinary research & social innovation</li>
            </ul>
            <button className="about-btn">EXPLORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
