import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import coversume from '../images/coversume.png';
import '../styles/App.css';

const Coversume = () => {
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
          <h1 className="project-detail-title">CoverSume</h1>
          
          <p className="project-detail-desc">
            CoverSume is an AI-powered resume and cover letter generator for people in the tech field. It takes in user input and uses OpenAI API to convert that input into latex resumes that mimic the famous Jake's Resume, which are the industry standard, as well as latex cover letters based on the user's resume and desired job.
          </p>
          
          <p className="project-detail-desc">
            I developed this project as a full-stack developer, handling both frontend user interface design and backend functionality to create a seamless user experience for resume and cover letter creation.
          </p>
          
          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list">
              <div className='project-skills'>ReactJS</div>
              <div className='project-skills'>NodeJS</div>
              <div className='project-skills'>TailwindCSS</div>
              <div className='project-skills'>ExpressJS</div>
              <div className='project-skills'>OpenAI API</div>
              <div className='project-skills'>LaTeX</div>
              <div className='project-skills'>Docker</div>
            </div>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a 
              href="https://coversume-frontend.onrender.com/#/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit the Website ↗
            </a>
            
            <a 
              href="https://github.com/ericnii/coversume" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on GitHub ↗
            </a>
          </div>
        </div>
        
        <img 
          src={coversume} 
          alt="Coversume Application Screenshot" 
          className="project-detail-image" 
        />
      </div>
    </div>
  );
};

export default Coversume;
