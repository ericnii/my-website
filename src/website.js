import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import websiteImg from './website.png';
import './App.css';

const Website = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-container">
      <button onClick={() => navigate('/', { state: { scrollToProjects: true } })} className="project-detail-back">
        ← Back
      </button>
      <div className="project-detail-content">
        <div className="project-detail-text">
          <h1 className="project-detail-title">Personal Portfolio Website</h1>
          <p className="project-detail-desc">
            This is my responsive personal portfolio (this site!) built with React, JavaScript, and HTML/CSS. It adapts seamlessly to all devices and features parallax scrolling, animations, dark mode, and a Web3Forms contact form. Explore the code and design inspiration behind this project!
          </p>
          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list">
              <div className='project-skills'>ReactJS</div>
              <div className='project-skills'>JavaScript</div>
              <div className='project-skills'>HTML/CSS</div>
            </div>
          </div>
        </div>
        <img src={websiteImg} alt="Personal Portfolio Website Screenshot" className="project-detail-image" />
      </div>
    </div>
  );
};

export default Website;