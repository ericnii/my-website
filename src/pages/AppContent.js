import '../styles/App.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlurText from "../components/BlurText";
import FadeContent from '../components/FadeContent'
//import Squares from '../components/Squares';
import ColorBends from '../components/ColorBends';
//import Antigravity from '../components/AntiGravity';
//import Dither from '../components/Dither';
import SplashCursor from '../components/SplashCursor';
import { Link } from 'react-scroll'
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

  const [text] = useTypewriter({
    words: ['CS @ UofT', 'I\'m a Software Developer/Engineer', 'I\'m a Full Stack Developer', 'Aspiring AI Developer'],
    loop: Infinity,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='home' className="website">
      {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div> */}
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
      <ColorBends
        colors={["#4F0A44", "#1E115C", "#003A4A"]}
        rotation={90}
        speed={0.15}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        noise={0.15}
        parallax={0.5}
        iterations={1}
        intensity={0.6}
        bandWidth={6}
        transparent
        autoRotate={0}
        color="#A855F7"
      />
      {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div> */}
      <div className={`top-categories ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="desktop-nav">
          <Link to='home' smooth={true} duration={1000} className='link'>Eric Ni</Link>
          <Link to='about' smooth={true} duration={1000} className='link'>About Me</Link>
          <Link to='projects' smooth={true} duration={1000} className='link'>Projects</Link>
          <Link to='skills' smooth={true} duration={1000} className='link'>Skills</Link>
          <Link to='contact' smooth={true} duration={1000} className='contact-link'>Contact</Link>
        </div>
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to='home' smooth={true} duration={1000} className='mobile-link' onClick={closeMobileMenu}>Eric Ni</Link>
        <Link to='about' smooth={true} duration={1000} className='mobile-link' onClick={closeMobileMenu}>About Me</Link>
        <Link to='projects' smooth={true} duration={1000} className='mobile-link' onClick={closeMobileMenu}>Projects</Link>
        <Link to='skills' smooth={true} duration={1000} className='mobile-link' onClick={closeMobileMenu}>Skills</Link>
        <Link to='contact' smooth={true} duration={1000} className='mobile-contact-link' onClick={closeMobileMenu}>Contact</Link>
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
          <h2>{text}<Cursor cursorStyle="|" /></h2>
        </FadeContent>
        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={1000} className='front-buttons'>
          <Link to='projects' smooth={true} duration={1000} className="front-button">
            View Projects <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '8px' }} />
          </Link>
          <Link to='contact' smooth={true} duration={1000} className="front-button">
            Contact <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '8px' }} />
          </Link>
        </FadeContent>
        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={1000} className='scroll-cont'>
          <Lottie animationData={Scroll} className='scroll-down' />
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
          <div><a href="mailto::eric.ni@mail.utoronto.ca">eric.ni@mail.utoronto.ca</a></div>
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