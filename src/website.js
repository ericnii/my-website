import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import websiteImg from './images/website.png';
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
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a 
              href="https://github.com/ericnii/my-website" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#0fb5fc', 
                textDecoration: 'none', 
                fontSize: '1.1rem',
                fontWeight: '600',
                padding: '12px 24px',
                border: '2px solid #0fb5fc',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#0fb5fc';
                e.target.style.color = '#0a0a23';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#0fb5fc';
              }}
            >
              View Project on GitHib ↗
            </a>
          </div>
        <img src={websiteImg} alt="Personal Portfolio Website Screenshot" className="project-detail-image" />
      </div>
    </div>
  );
};

export default Website;