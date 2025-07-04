import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import green from './UTMRobotics.png';
import './App.css';

const GreenDef = () => {
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
          <h1 className="project-detail-title">The Green Defender</h1>
          <p className="project-detail-desc">
            The Green Defender is an Arduino-based robotic device using C++ that monitors plant health through soil temperature, humidity, and moisture sensors, with added motion detection to protect crops from animals. It combines environmental awareness with practical robotics.
          </p>
          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list" style={{ justifyContent: 'center' }}>
              <div className='project-skills'>C++</div>
              <div className='project-skills'>Arduino</div>
              <div className='project-skills'>Sensor</div>
              <div className='project-skills'>Breadboard</div>
              <div className='project-skills'>Buzzer</div>
              <div className='project-skills'>Display Screen</div>
            </div>
          </div>
          <div className="project-detail-collab" style={{ marginTop: '40px' }}>
            <h2 className="project-detail-tech-title">Collaborators</h2>
            <ul className="project-detail-collab-list" style={{ paddingLeft: '20px', margin: 0, fontSize: '1.1rem', color: '#ffe066', listStyle: 'disc inside' }}>
              <li>Jason Phan</li>
              <li>Nithin Shyjan</li>
              <li>Ryan Ponneri</li>
            </ul>
          </div>
        </div>
        <img src={green} alt="The Green Defender Robot" className="project-detail-image" />
      </div>
    </div>
  );
};

export default GreenDef;