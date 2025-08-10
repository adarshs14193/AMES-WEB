import React from 'react';
import { useFadeUpOnScroll } from './useFadeUpOnScroll';
import useTypewriter from './useTypewriter';
import './ProjectsSection.css';
import ImageCarousel from './ImageCarousel';

function ProjectsSection() {
  const projects = [
    {
      title: 'Smart Fish Counting System',
      desc: 'Using image processing and sensors to track fish population in real-time.',
      img: '/pro.png',
    },
    {
      title: 'Automation of Fish Breeding Systems',
      desc: 'Designing automated temperature, oxygen, and feed control for breeding tanks.',
      img: '/pro.png',
    },
    {
      title: 'Variable Gap Fish Sorting System',
      desc: 'Mechatronic design for sorting fish by size using adjustable sorting trays.',
      img: '/pro.png',
    },
    {
      title: 'Vehicle Tracking System',
      desc: 'Real-time vehicle tracking using GPS + IoT modules, aimed at creating smart transport.',
      img: '/pro.png',
    },
    {
      title: 'NITK Lake Water Saving System',
      desc: 'Optimizing water consumption using smart control systems for sustainability.',
      img: '/pro.png',
    },
  ];

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
        <div className="projects-cards">
          {projects.map((project, idx) => (
            <div
              className={`projects-card projects-row${idx % 2 === 1 ? ' reverse' : ''}`}
              key={idx}
              ref={el => fadeRefs.current[idx + 2] = el}
            >
              <div className="projects-img-col">
                <img src={project.img} alt={project.title} className="projects-img" />
              </div>
              <div className="projects-text-col">
                <h3 className="card-title">{project.title}</h3>
                <div className="projects-card-text">{project.desc}</div>
                <button className="projects-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
