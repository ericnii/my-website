import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import codesusImg from '../images/codesus.png';
import '../styles/App.css';
import SplashCursor from '../components/SplashCursor';

const CodeSus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-container">
      <SplashCursor
        DENSITY_DISSIPATION={1}
        VELOCITY_DISSIPATION={0.8}
        PRESSURE={0.02}
        CURL={1.2}
        SPLAT_RADIUS={0.1}
        SPLAT_FORCE={1000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <button
        onClick={() => navigate('/', { state: { scrollToProjects: true } })}
        className="project-detail-back"
      >
        ← Back
      </button>

      <div className="project-detail-content">
        <div className="project-detail-text">
          <h1 className="project-detail-title">CodeSus</h1>

          <p className="project-detail-desc">
            A full-stack AI-powered coding game that emulates the viral game, Among Us. Users get tasked with completing coding challenges to learn proper coding practices, while one user is the imposter trying to sabotage the codebase, and players try to find and eliminate the imposter.
          </p>

          <p className="project-detail-desc">
            I was a full-stack developer for this project, handling both frontend user interface design and backend functionality for the imposter sabotaging the code and task creation to create a seamless experience for the users.
          </p>

          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list">
              <div className='project-skills'>NodeJS</div>
              <div className='project-skills'>ExpressJS</div>
              <div className='project-skills'>Socket.IO</div>
              <div className='project-skills'>ReactJS</div>
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a
              href="https://devpost.com/software/code-sus"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on Devpost ↗
            </a>

            <a
              href="https://github.com/ericnii/code-sus"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on GitHub ↗
            </a>
          </div>
        </div>

        <img
          src={codesusImg}
          alt="CodeSus Screenshot"
          className="project-detail-image"
        />
      </div>
    </div>
  );
};

export default CodeSus;
