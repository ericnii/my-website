import green from './images/UTMRobotics.png';
import { useNavigate } from 'react-router-dom';
import websiteImg from './images/website.png';
import './Projects.css';


function Projects() {
  const navigate = useNavigate();
  return (
    <section id='projects' className='projects-section'>
      <h1 className='project'>Projects</h1>
      <div className='project-container'>
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
        <div className='project-box'>
          <h3 className='project-title'>Personal Mysh Terminal</h3>
          <p className='project-text'>A Bash-like terminal emulator in C with 30+ shell features, leveraging POSIX system calls (fork/exec/pipes/signals) and implementing custom parsers for command processing, pipes, and background processes. Demonstrates low-level systems programming mastery.</p>
          <div className='project-skills-container-2'>
            <div className='project-skills'>C</div>
            <div className='project-skills'>Git</div>
          </div>
        </div>
        <div className='project-box'>
          <h3 className='project-title'>Paint Application</h3>
          <p className='project-text'>A Windows Paint-inspired application using Java, implementing core features like drawing tools, color selection, and canvas manipulation. Version-controlled with Git to demonstrate collaborative development practices.</p>
          <div className='project-skills-container-2'>
            <div className='project-skills'>Java</div>
            <div className='project-skills'>Git</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects; 