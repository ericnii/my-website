import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import green from '../images/UTMRobotics.png';
import '../styles/App.css';

const GreenDef = () => {
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
          <h1 className="project-detail-title">The Green Defender</h1>
          
          <p className="project-detail-desc">
            The Green Defender is an Arduino-based robotic device using C++ that monitors plant health through soil temperature, humidity, and moisture sensors, with added motion detection to protect crops from animals. It combines environmental awareness with practical robotics.
          </p>
          
          <p className="project-detail-desc">
            I served as a software and hardware developer, handling both Arduino and sensor configuration onto a breadboard, as well as C++ programming to implement the core logic driving the robotic device.
          </p>
          
          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list">
              <div className='project-skills'>C++</div>
              <div className='project-skills'>Arduino</div>
              <div className='project-skills'>Sensor</div>
              <div className='project-skills'>Breadboard</div>
              <div className='project-skills'>Buzzer</div>
              <div className='project-skills'>Display Screen</div>
            </div>
          </div>
          
          <div className="project-detail-collab">
            <h2 className="project-detail-tech-title">Collaborators</h2>
            <ul className="project-detail-collab-list">
              <li>Jason Phan</li>
              <li>Nithin Shyjan</li>
              <li>Ryan Ponneri</li>
            </ul>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a 
              href="https://devpost.com/software/the-guardian-of-plants-and-trees" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on Devpost ↗
            </a>
            
            <a 
              href="https://github.com/ericnii/The-Green-Defender" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on GitHub ↗
            </a>
          </div>
        </div>
        
        <img 
          src={green} 
          alt="The Green Defender Robot" 
          className="project-detail-image" 
        />
      </div>
    </div>
  );
};

export default GreenDef;