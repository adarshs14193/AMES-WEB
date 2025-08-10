import React, { useEffect, useState, useRef } from "react";
import { useFadeUpOnScroll } from './useFadeUpOnScroll';
import useTypewriter from './useTypewriter';
import './ProjectsSection.css';
import eventsData from "../Data/project.js";
import ImageCarousel from './ImageCarousel';

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
        <div className="featured-projects-nitk" ref={eventRef}>
          <div className="fp-content-left">
            <div className="fp-header" >Featured Events</div>
            <div className="fp-desc">
              NITK instituted the Alumni Awards to recognize the exemplary
              achievements of its former students.
            </div>
            <div className="fp-projects-list">
              {eventsData.map((project, idx) => (
                <div
                  key={project.title}
                  className={`fp-project-title${activeIndex === idx ? " active" : ""}`}
                  onClick={() => handleClick(idx)}
                  tabIndex={0}
                  role="button"
                >
                  <span className="fp-bullet">&#8226;</span>

                  <div className="title-details">
                    <div className="title"><span>{project.title}</span></div>

                    {activeIndex === idx && (
                      <div className="fp-project-details">
                        <div className="fp-project-description">{project.details}</div>
                        <a
                          href="*"
                          className="fp-read-more-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          READ MORE <span aria-hidden="true">↗</span>
                        </a>
                        <div className="fp-progress-bar-container">
                          <div className="fp-progress-label"></div>
                          <div className="fp-progress-bar">
                            <div
                              key={barKey}
                              className="fp-progress-bar-inner"
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fp-content-right">
            {eventsData[activeIndex].image ? (
              <img
                src={eventsData[activeIndex].image}
                alt={eventsData[activeIndex].title}
                className="fp-project-image"
              />
            ) : (
              <div className="fp-project-image fp-image-placeholder">
                No Image Available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
