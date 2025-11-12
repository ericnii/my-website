import green from '../images/UTMRobotics.png';
import { useNavigate } from 'react-router-dom';
import websiteImg from '../images/website.png';
import coversumeImg from '../images/coversume.png'
import healImg from '../images/healense.png'
import tictactoeImg from '../images/tictactoe.png'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';


function Projects() {
  const navigate = useNavigate();
  return (
    <section id='projects' className='projects-section'>
      <h1 className='project'>Projects</h1>
      <div className='project-container'>
        <div className='project-box' onClick={() => navigate('/coversume', { state: { fromProjects: true } })}>
          <img src={coversumeImg} alt='CoverSume' className='project-box-image' />
          <h3 className='project-title project-box-title'>CoverSume</h3>
          <p className='project-text project-box-desc'>An AI-powered resume and cover letter generator for people in the tech field. </p>
          <span className='project-box-learn-more'>Click to learn more <span style={{fontSize: '1.1em', marginLeft: '4px'}}>&rarr;</span></span>
        </div>
        <div className='project-box' onClick={() => navigate('/healens', { state: { fromProjects: true } })}>
          <img src={healImg} alt='HeaLENS' className='project-box-image' />
          <h3 className='project-title project-box-title'>HEALense</h3>
          <p className='project-text project-box-desc'>An AI-powered image analysis tool.</p>
          <span className='project-box-learn-more'>Click to learn more <span style={{fontSize: '1.1em', marginLeft: '4px'}}>&rarr;</span></span>
        </div>
        <div className='project-box' onClick={() => navigate('/website', { state: { fromProjects: true } })}>
          <img src={websiteImg} alt='My Personal Portfolio' className='project-box-image' />
          <h3 className='project-title project-box-title'>My Personal Portfolio</h3>
          <p className='project-text project-box-desc'>What you&apos;re viewing right now!</p>
          <span className='project-box-learn-more'>Click to learn more <span style={{fontSize: '1.1em', marginLeft: '4px'}}>&rarr;</span></span>
        </div>
        <div className='project-box' onClick={() => navigate('/greendef', { state: { fromProjects: true } })}>
          <img src={green} alt='The Green Defender' className='project-box-image' />
          <h3 className='project-title project-box-title'>The Green Defender</h3>
          <p className='project-text project-box-desc'>An arduino-based robotic device that monitors plant health.</p>
          <span className='project-box-learn-more'>
            Click to learn more <span style={{fontSize: '1.1em', marginLeft: '4px'}}>&rarr;</span>
          </span>
        </div>
      </div>
      <div className='view-all' onClick={() => navigate('/all-projects', { state: { fromProjects: true } })} >View all projects! <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAngleRight}/> </div>
    </section>
  );
}

export default Projects; 