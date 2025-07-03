import green from './UTMRobotics.png';
import website from './website.png';
import Portfolio from './website'
import Green from './green_def'
import { useNavigate } from 'react-router-dom';


function Projects() {
  return (
    <section id='projects' className='projects-section'>
      <h1 className='project'>Projects</h1>
      <div className='project-container'>
        <div className='project-box'>
          <h3 className='project-title'>Personal Portfolio Website</h3>
          <p className='project-text'>My responsive personal portfolio (this site!) is built with React, JavaScript, and HTML/CSS. It is designed to adapt seamlessly to all devices. Various features include parallax scrolling, animations, dark mode, and a Web3Forms contact form</p>
          <div className='project-skills-container-3'>
            <div className='project-skills'>ReactJS</div>
            <div className='project-skills'>JavaScript</div>
            <div className='project-skills'>HTML/CSS</div>
          </div>
        </div>
        <div className='project-box'>
          <h3 className='project-title'>The Green Defender</h3>
          <p className='project-text-green'>An Arduino-based robotic device using C++ that monitors plant health through soil temperature, humidity, and moisture sensors, with added motion detection to protect crops from animals. Combines environmental awareness with practical robotics.</p>
          <div className='green-skills-container'>
            <div className='project-skills'>C++</div>
            <div className='project-skills'>Arduino</div>
          </div>
          <img className='green-def' src={green} alt='' />
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