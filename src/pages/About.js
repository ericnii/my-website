import about_me from '../images/about_me.png';
import second_me from '../images/DSC05286.JPG';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PixelTransition from '../components/PixelTransition';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const [about] = useTypewriter({
    words: [' Me', ' Eric Ni'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <motion.section
      id='about'
      className='about-page'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <h1 className='about'>
        About
        <span className='about-typewriter'>
          {about}
        </span>
        <Cursor cursorStyle="|" />
      </h1>
      <div className='about-container'>
        <div className='image-container'>
          <PixelTransition
            firstContent={
              <img
                src={about_me}
                alt="Eric Ni"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <img
                src={second_me}
                alt="Eric Ni alternate"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            gridSize={8}
            pixelColor="#ffffff"
            aspectRatio="133.33%"
            once={false}
            animationStepDuration={0.4}
            className="about-image"
          />
        </div>
        <div className='about-text-container'>
          <p className='about-text'>
            Hello, my name is <span className='yellow-accent'>Eric</span> 👋 !
          </p>
          <p className='about-text2'>I'm 20 years old, Chinese-Canadian, and was born and raised in Toronto, Canada. I'm currently a third-year Computer Science and Statistics student @ University of Toronto Mississauga with a passion for turning ideas into code. I love tackling challenges, building solutions, and constantly expanding my skills in programming and web development.</p>
          <p className='about-text2'>Currently, I am currently on a 16-month work term @ JANA Corporation. I'm always looking for opportunities to collaborate, contribute to meaningful projects, and learn.</p>
          <p className='about-text2'>Outside of coding, I am an avid music-lover, thrifter, swimmer, and gym-goer. I am also a die-hard NBA and MLB fan, with some NHL sprinkled in here and there. If you're wondering, yes I am indeed a Toronto sports fan despite all the heartbreak. I will support the Leafs, Jays, and Raptors forever, and I will die on that hill!</p>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            <button className='resume'>
              View My Resume <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '8px' }} />
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default About; 