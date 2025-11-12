import '../styles/App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlurText from "../components/BlurText";
import FadeContent from '../components/FadeContent'
import Squares from '../components/Squares';
import {Link} from 'react-scroll'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Scroll from '../assets/scroll.json';
import Lottie from 'lottie-react';
import Skills from "./Skills";
import { useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToProjects) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const [text] = useTypewriter ({
    words: ['CS @ UofT', 'I\'m a Full Stack Developer', 'I\'m a Software Developer', 'I\'m a Web Developer', 'Aspiring AI Developer'],
    loop: Infinity,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });
  const [pages, setPages] = useState(() => {
    return window.innerWidth <= 480 ? 5 : 4;
  });
  
  const contactScroll = (pages === 5 ? 4 : 3);


  useEffect(() => {
    const handleResize = () => {
      const newPages = window.innerWidth <= 480 ? 5 : 4;
      setPages(newPages);
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  const [about] = useTypewriter ({
    words: [' Me', ' Eric Ni'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  //below is to submit an email from Web3Forms
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b3da352d-bc4b-4314-9bfa-36d8cad0d637");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        text: 'Message sent!',
        icon: 'success',
        confirmButtonText: 'Cool',
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='home' className="website">  
      <Squares 
      speed={0.5} 
      squareSize={40}
      direction='diagonal' 
      borderColor='#281744'
      hoverFillColor='#222'
      />
        <div className='top-categories'>
            <Link to='home' smooth={true} duration={1000} className='link'>Eric Ni</Link>
            <Link to='about' smooth={true} duration={1000} className='link'>About Me</Link>
            <Link to='projects' smooth={true} duration={1000} className='link'>Projects</Link>
            <Link to='skills' smooth={true} duration={1000} className='link'>Skills</Link>
            <Link to='contact' smooth={true} duration={1000} className='contact-link'>Contact</Link>
        </div>
        <div className='front-container'>
            <BlurText
            text="Eric Ni"
            delay={700}
            animateBy="words"
            direction="top"
            className='front-title'
            />
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={1000} className='fade-text'>
            <h2>{text}<Cursor cursorStyle="|"/></h2>
            </FadeContent>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={1000} className='front-buttons'>
            <Link to='projects' smooth={true} duration={1000} className="front-button">
                View Projects <FontAwesomeIcon icon={faAngleRight} style={{marginLeft: '8px'}} />
            </Link>
            <Link to='contact' smooth={true} duration={1000} className="front-button">
                Contact <FontAwesomeIcon icon={faAngleRight} style={{marginLeft: '8px'}} />
            </Link>
            </FadeContent>
            <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={1000} className='scroll-cont'>
            <Lottie animationData={Scroll} className='scroll-down'/>
            <div className='scroll-text'>Scroll for more</div>
            </FadeContent>
        </div>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <footer className="footer">
            <div className="footer-content">
            <div>© {new Date().getFullYear()} Eric Ni</div>
            <div> | </div>
            <div><a href="ericni2013@gmail.com">ericni2013@gmail.com</a></div>
            <div> | </div>
            <div><a href="tel:+16475459818">+1 (647)-545-9818</a></div>
            <div> | </div>
            <div>Toronto, ON</div>
            </div>
        </footer>
    </div>
  );
}

export default AppContent;