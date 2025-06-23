import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import animation from './animation.json';
import about_me from './about_me.png';
import Lottie from 'lottie-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; 
import { useRef,useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import green from './UTMRobotics.png';
import Aurora from './Aurora';

function Button ({ name, handle} ) {
    if (name === "Contact Me") {
      return (
        <button onClick={handle} className='contact-button'>{name} </button>  
      ) 
    } else {
      return (
        <button onClick={handle} className='button'>{name} </button> 
      ) 
    }
  
}

function App() {

  function buttonHandle(name) {
    if (name === "EN") {
      ref.current.scrollTo(0);
    } else if (name === "About Me") {
      ref.current.scrollTo(1);
    } else if (name === "Projects") {
      ref.current.scrollTo(2);
    } else {
      ref.current.scrollTo(contactScroll);
    }
  }

  const ref = useRef();
  const [text] = useTypewriter ({
    words: ['CS @ UofT', 'Aspiring Full Stack Developer'],
    loop: Infinity,
    typeSpeed: 50,
    deleteSpeed: 50,
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
    deleteAll: true,
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
    <div className="website">
      <Aurora
        colorStops={["#0e3c92", "#FFEA00", "#2979ff"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div>
        <Parallax pages={pages} ref={ref} key={pages}>
          {/* add this to ParallaxLayer props if I want old bg: style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}} */}
          {/* Home page */}
          <ParallaxLayer offset={0}>
            <div className='background-layer'>
              <div className='content-layer'>
                            <h1 className='front-title'>
              Eric Ni
            </h1>  
              </div>
            </div>

            <h2>
              {text}
              <Cursor cursorStyle="|"/>
            </h2>
            <Lottie className='animation' animationData={animation}></Lottie>
            
          </ParallaxLayer>

          {/* Second page / About Me */}
          <ParallaxLayer offset={1} speed={1}>
          <div className='about-text-container'>
            <h1 className='about'>
              About
              <span className='about-typewriter'>
                {about}
              </span>
              <Cursor cursorStyle="|"/>
            </h1>
            <p className='about-text'>
              Hello, my name is Eric 👋 ! 
            </p>

            <p className='about-text2'>I'm 19, born and raised in Toronto, Canada, and ethnically Chinese. I'm a second-year Computer Science student @ University of Toronto Mississauga with a passion for turning ideas into code. I love tackling challenges, building solutions, and constantly expanding my skills in programming and web development.</p>
            <p className='about-text2'>Currently, I'm looking for opportunities to collaborate, contribute to meaningful projects, and learn from experienced developers.</p>
            <p className='about-text2'>Outside of coding, I am an avid music-lover, thrifter, swimmer, and gym-goer. I am also a die-hard NBA and MLB fan, with some NHL sprinkled in here and there. If you're wondering, yes I am indeed a Toronto sports fan despite all the heartbreak. I will support the Leafs, Jays, and Raptors forever, and I will die on that hill!</p>
            <p className='skills-title'>Skills</p>
            <p className='skills-type'>Languages</p>
            <p className='skills'>JavaScript, HTML, CSS, SQL, C++, Java, Bash, C, Python, LaTeX</p>
            <p className='skills-type'>Developer Tools/Frameworks</p>
            <p className='skills'>React.js, Spring Boot, Git, PyCharm, IntelliJ, VS Code</p> 

            <a 
              href={`${process.env.PUBLIC_URL}/resume.pdf`} 
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <button className='resume'>
                View My Resume!
              </button>
            </a>
          </div>

            <div className='image-container'>
              <img className='about-image' src={about_me} alt="" />
            </div>

          </ParallaxLayer>

          {/* Projects */}
          <ParallaxLayer offset={2} speed={1}>
            <h1 className='project'>Projects</h1>
            <div className='project-container'>
              <div className='project-box'>
                <h3 className='project-title'>
                  Personal Portfolio Website
                </h3>
                <p className='project-text'>My responsive personal portfolio (this site!) is built with React, JavaScript, and HTML/CSS. It is designed to adapt seamlessly to all devices. Various features include parallax scrolling, animations, dark mode, and a Web3Forms contact form</p>
                <div className='project-skills-container-3'>
                  <div className='project-skills'>ReactJS</div>
                  <div className='project-skills'>JavaScript</div>
                  <div className='project-skills'>HTML/CSS</div>
                </div>
              </div> 
              <div className='project-box'>
                <h3 className='project-title'>
                  The Green Defender
                </h3>
                <p className='project-text-green'>An Arduino-based robotic device using C++ that monitors plant health through soil temperature, humidity, and moisture sensors, with added motion detection to protect crops from animals. Combines environmental awareness with practical robotics.</p>
                <div className='green-skills-container'>
                  <div className='project-skills'>C++</div>
                  <div className='project-skills'>Arduino</div>
                </div>
                <img className='green-def' src={green} alt=''/>
              </div> 
              <div className='project-box'>
                <h3 className='project-title'>
                  Personal Mysh Terminal
                </h3>
                <p className='project-text'>A Bash-like terminal emulator in C with 30+ shell features, leveraging POSIX system calls (fork/exec/pipes/signals) and implementing custom parsers for command processing, pipes, and background processes. Demonstrates low-level systems programming mastery.</p>
                <div className='project-skills-container-2'>
                  <div className='project-skills'>C</div>
                  <div className='project-skills'>Git</div>
                </div>
              </div> 
              <div className='project-box'>
                <h3 className='project-title'>
                  Paint Application
                </h3>
                <p className='project-text'>A Windows Paint-inspired application using Java, implementing core features like drawing tools, color selection, and canvas manipulation. Version-controlled with Git to demonstrate collaborative development practices.</p>
                <div className='project-skills-container-2'>
                  <div className='project-skills'>Java</div>
                  <div className='project-skills'>Git</div>
                </div>
              </div> 
            </div>
          </ParallaxLayer>

          {/* Contact Me */}
          <ParallaxLayer offset={contactScroll} speed={1}>
            <h1 className='contact-title'>
              Get in touch. 
            </h1>
            <p className='contact-text'>
              Interested to collaborate or have any questions? Reach out via email, phone, or connect through my socials!
            </p> 
            <form onSubmit={onSubmit}>
                <div className='input-box'>
                  <label>Full Name</label>
                  <input name='name' className='field' placeholder='Enter your name' required/>
                </div>
                <div className='input-box'>
                  <label>Email Address</label>
                  <input name='email' className='field' placeholder='Enter your email' required/>
                </div>
                <div className='input-box'>
                  <label>Your Message</label>
                  <textarea name='message'className='msg' placeholder='Enter your message' required></textarea>
                </div>
                <button>Submit</button>
            </form>
            <div className='contact'>
              <p className='follow'>Follow me on my socials and feel free to shoot a DM!</p>
              <div className='icons'>
                <div>
                  <a href='https://www.instagram.com/erxc._.n?igsh=NHZ4cDZqNDA5dmpk' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                </div>
                <div>
                  <a href='https://github.com/ericnii' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </div>
                <div>
                  <a href='https://www.linkedin.com/in/eric-ni-017985225/' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
            <div className='contact2'>
              <div className='contact-icons'>
                  <FontAwesomeIcon className='phone' icon={faPhone}/>
                  <p className='my-num'>+1 (647)-545-9818</p>
              </div>
              <div className='contact-icons'>
                  <FontAwesomeIcon className='email' icon={faEnvelope}/>
                  <p className='my-email'>ericni2013@gmail.com</p>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
      <div className='top-categories'>
        <Button name={"EN"} handle={()=>{buttonHandle("EN")}}/>
        <Button name={"About Me"} handle={() => {buttonHandle("About Me")}}/>
        <Button name={"Projects"} handle={() => {buttonHandle("Projects")}}/>
        <Button name={"Contact Me"} handle={() => {buttonHandle("Contact Me")}}/>
      </div>
    </div>
  );
}

export default App;
