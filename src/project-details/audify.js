import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import audifyImg from '../images/audify.png';
import '../styles/App.css';
import SplashCursor from '../components/SplashCursor';

const Audify = () => {
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
          <h1 className="project-detail-title">Audify.AI</h1>

          <p className="project-detail-desc">
            A full-stack, AI-powered song and audio translator that features audio translation for 5+ languages that gets integrated with the background instrumentals.
          </p>

          <p className="project-detail-desc">
            I was a full-stack developer for this project, handling both frontend user interface design and backend functionality for song uploads, audio and lyric transcribing, and song translating of the transcribed lyrics to create a seamless user experience for the users.
          </p>

          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list">
              <div className='project-skills'>FastAPI</div>
              <div className='project-skills'>ReactJS</div>
              <div className='project-skills'>Google Cloud</div>
              <div className='project-skills'>Google Gemini API</div>
              <div className='project-skills'>OpenAI Whisper</div>
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a
              href="https://devpost.com/software/audify-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on Devpost ↗
            </a>

            <a
              href="https://github.com/ericnii/Audify.AI"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on GitHub ↗
            </a>
          </div>
        </div>

        <img
          src={audifyImg}
          alt="Audify.AI Screenshot"
          className="project-detail-image"
        />
      </div>
    </div>
  );
};

export default Audify;
