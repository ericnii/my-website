import React from 'react'
import '../styles/App.css'
import './Projects.css'
import { useEffect } from 'react';
import green from '../images/UTMRobotics.png';
import { useNavigate } from 'react-router-dom';
import websiteImg from '../images/website.png';
import coversumeImg from '../images/coversume.png'
import healImg from '../images/healense.png'
import tictactoeImg from '../images/tictactoe.png'
import Squares from '../components/Squares';

const Viewall = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="project-detail-container">
            <Squares 
            speed={0.5} 
            squareSize={40}
            direction='diagonal' 
            borderColor='#271E37'
            hoverFillColor='#222'
            />
            <button 
                onClick={() => navigate('/', { state: { scrollToProjects: true } })} 
                className="project-detail-back"
            >
                ← Back
            </button>
            <h1 className='project'>All Projects</h1>
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
                <div className='project-box' onClick={() => navigate('/tic-tac-toe-solver', { state: { fromProjects: true } })}>
                    <img src={tictactoeImg} alt='Tic-Tac-Toe Solver' className='project-box-image' />
                    <h3 className='project-title project-box-title'>Tic-Tac-Toe Solver</h3>
                    <p className='project-text project-box-desc'>A Python-based game theory solver using graph algorithms.</p>
                    <span className='project-box-learn-more'>
                        Click to learn more <span style={{fontSize: '1.1em', marginLeft: '4px'}}>&rarr;</span>
                    </span>
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
        </div>
    )
}

export default Viewall


