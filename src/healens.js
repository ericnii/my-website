import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import healens from './images/healense.png';
import './App.css';

const Healens = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-container">
      <button 
        onClick={() => navigate('/', { state: { scrollToProjects: true } })} 
        className="project-detail-back"
      >
        ← Back
      </button>
      
      <div className="project-detail-content">
        <div className="project-detail-text">
          <h1 className="project-detail-title">HEALense</h1>
          
          <p className="project-detail-desc">
          AI-powered image analysis, where the user uploads or captures a photo and ask questions to instantly identify objects, conditions, and features with precise visual detection.          </p>
          
          <p className="project-detail-desc">
            I served as a frontend developer, contributing the every page of the website, including the front page, login page, and about me page. I also implemented responsive design to ensure the website is optimized for 15+ different screen sizes.
          </p>
          
                      <div className="project-detail-tech">
              <h2 className="project-detail-tech-title">Technologies Used</h2>
              <div className="project-detail-tech-list">
                <div className='project-skills'>ReactJS</div>
                <div className='project-skills'>TailwindCSS</div>
                <div className='project-skills'>Git</div>
              </div>
            </div>
            
            <div className="project-detail-collab">
              <h2 className="project-detail-tech-title">Collaborators</h2>
              <ul className="project-detail-collab-list">
                <li>Anthony Hana</li>
                <li>Hanna Park</li>
                <li>Tran Minh Long</li>
              </ul>
            </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a 
              href="https://healens.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit the Website ↗
            </a>
            
            <a 
              href="https://devpost.com/software/healense" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on Devpost ↗
            </a>
            
            <a 
              href="https://github.com/ericnii/heal-spur-2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on GitHub ↗
            </a>
          </div>
        </div>
        
        <img 
          src={healens} 
          alt="Healens Application Screenshot" 
          className="project-detail-image" 
        />
      </div>
    </div>
  );
};

export default Healens;
