import { useNavigate } from 'react-router-dom';
import coversumeImg from '../images/coversume.png';
import sportsdeckImg from '../images/sportsdeck.png';
import codesusImg from '../images/codesus.png';
import audifyImg from '../images/audify.png';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import coversumePreview from '../images/previews/coversume-preview.png';
import sportsdeckPreview from '../images/previews/sportsdeck-preview.png';
import codesusPreview from '../images/previews/codesus-preview.png';
import audifyPreview from '../images/previews/audify-preview.png';
import './Projects.css';


function Projects() {
  const navigate = useNavigate();
  return (
    <motion.section
      id='projects'
      className='projects-section'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <h1 className='project'>Projects</h1>
      <div className='project-container'>
        <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
          <div className='project-card-wrapper' onClick={() => navigate('/coversume', { state: { fromProjects: true } })}>
            <div className='project-card-preview' style={{ backgroundImage: `url(${coversumePreview})` }}></div>
            <div className='project-box'>
              <img src={coversumeImg} alt='CoverSume' className='project-box-image' />
              <h3 className='project-title project-box-title'>CoverSume</h3>
              <p className='project-text project-box-desc'>An AI-powered resume and cover letter generator for people in the tech field. </p>
              <span className='project-box-learn-more'>Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span></span>
            </div>
          </div>
        </Tilt>
        <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
          <div className='project-card-wrapper' onClick={() => navigate('/sportsdeck', { state: { fromProjects: true } })}>
            <div className='project-card-preview' style={{ backgroundImage: `url(${sportsdeckPreview})` }}></div>
            <div className='project-box'>
              <img src={sportsdeckImg} alt='SportsDeck' className='project-box-image' />
              <h3 className='project-title project-box-title'>SportsDeck</h3>
              <p className='project-text project-box-desc'>A modern UI dashboard for all things Premier League.</p>
              <span className='project-box-learn-more'>Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span></span>
            </div>
          </div>
        </Tilt>
        <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
          <div className='project-card-wrapper' onClick={() => navigate('/codesus', { state: { fromProjects: true } })}>
            <div className='project-card-preview' style={{ backgroundImage: `url(${codesusPreview})` }}></div>
            <div className='project-box'>
              <img src={codesusImg} alt='CodeSus' className='project-box-image' />
              <h3 className='project-title project-box-title'>CodeSus</h3>
              <p className='project-text project-box-desc'>An AI-powered educational coding game that emulates the viral game, Among Us.</p>
              <span className='project-box-learn-more'>Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span></span>
            </div>
          </div>
        </Tilt>
        <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
          <div className='project-card-wrapper' onClick={() => navigate('/audify', { state: { fromProjects: true } })}>
            <div className='project-card-preview' style={{ backgroundImage: `url(${audifyPreview})` }}></div>
            <div className='project-box'>
              <img src={audifyImg} alt='Audify.AI' className='project-box-image' />
              <h3 className='project-title project-box-title'>Audify.AI</h3>
              <p className='project-text project-box-desc'>An AI-powered song and audio translator.</p>
              <span className='project-box-learn-more'>Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span></span>
            </div>
          </div>
        </Tilt>
      </div>
      <div className='view-all' onClick={() => navigate('/all-projects', { state: { fromProjects: true } })} >View all projects! <FontAwesomeIcon style={{ marginLeft: '8px' }} icon={faAngleRight} /> </div>
    </motion.section>
  );
}

export default Projects; 