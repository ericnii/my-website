import about_me from './about_me.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function About() {
  const [about] = useTypewriter ({
    words: [' Me', ' Eric Ni'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <section id='about' className='about-page'>
      <h1 className='about'>
        About
        <span className='about-typewriter'>
          {about}
        </span>
        <Cursor cursorStyle="|"/>
      </h1>
      <div className='about-container'>
        <div className='image-container'>
          <img className='about-image' src={about_me} alt="" />
        </div>
        <div className='about-text-container'>
          <p className='about-text'>
            Hello, my name is <span className='yellow-accent'>Eric</span> 👋 ! 
          </p>
          <p className='about-text2'>I'm 19, born and raised in Toronto, Canada, and ethnically Chinese. I'm a second-year Computer Science student @ University of Toronto Mississauga with a passion for turning ideas into code. I love tackling challenges, building solutions, and constantly expanding my skills in programming and web development.</p>
          <p className='about-text2'>Currently, I'm looking for opportunities to collaborate, contribute to meaningful projects, and learn from experienced developers.</p>
          <p className='about-text2'>Outside of coding, I am an avid music-lover, thrifter, swimmer, and gym-goer. I am also a die-hard NBA and MLB fan, with some NHL sprinkled in here and there. If you're wondering, yes I am indeed a Toronto sports fan despite all the heartbreak. I will support the Leafs, Jays, and Raptors forever, and I will die on that hill!</p>
          <a 
            href={`${process.env.PUBLIC_URL}/resume.pdf`} 
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            <button className='resume'>
              View My Resume <FontAwesomeIcon icon={faAngleRight} style={{marginLeft: '8px'}} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About; 