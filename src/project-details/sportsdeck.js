import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sportsdeckImg from '../images/sportsdeck.png';
import '../styles/App.css';
import SplashCursor from '../components/SplashCursor';

const SportsDeck = () => {
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
          <h1 className="project-detail-title">SportsDeck</h1>

          <p className="project-detail-desc">
            A modern UI dashboard for all things Premier League. Features live match updates, standings, forums and threads, and personalized feeds for each user.
          </p>

          <p className="project-detail-desc">
            I was a lead full-stack developer for this project, handling both frontend user interface design and backend functionality for forums/threads and matches, to create a seamless user experience for Premier League fans.
          </p>

          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list">
              <div className='project-skills'>ReactJS</div>
              <div className='project-skills'>NodeJS</div>
              <div className='project-skills'>NextJS</div>
              <div className='project-skills'>Prisma</div>
              <div className='project-skills'>PostgreSQL</div>
              <div className='project-skills'>Docker</div>
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a
              href="https://sportsdeck-ruddy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Visit the Website ↗
            </a>

            <a
              href="https://github.com/ericnii/sports-deck/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on GitHub ↗
            </a>
          </div>
        </div>

        <img
          src={sportsdeckImg}
          alt="SportsDeck Screenshot"
          className="project-detail-image"
        />
      </div>
    </div>
  );
};

export default SportsDeck;
