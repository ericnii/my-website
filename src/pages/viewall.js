import React from 'react'
import '../styles/App.css'
import './Projects.css'
import './viewall.css'
import { useEffect } from 'react';
import green from '../images/UTMRobotics.png';
import { useNavigate } from 'react-router-dom';
import websiteImg from '../images/website.png';
import coversumeImg from '../images/coversume.png'
import healImg from '../images/healense.png'
import tictactoeImg from '../images/tictactoe.png'
import sportsdeckImg from '../images/sportsdeck.png';
import codesusImg from '../images/codesus.png';
import audifyImg from '../images/audify.png';
import SplashCursor from '../components/SplashCursor';
import ColorBends from '../components/ColorBends';
import Tilt from 'react-parallax-tilt';
import coversumePreview from '../images/previews/coversume-preview.png';
import healensPreview from '../images/previews/healens-preview.png';
import websitePreview from '../images/previews/website-preview.png';
import tictactoePreview from '../images/previews/tic-tac-toe-solver-preview.png';
import greendefPreview from '../images/previews/greendef-preview.png';
import sportsdeckPreview from '../images/previews/sportsdeck-preview.png';
import codesusPreview from '../images/previews/codesus-preview.png';
import audifyPreview from '../images/previews/audify-preview.png';

const Viewall = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-detail-container">
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
            <button
                onClick={() => navigate('/', { state: { scrollToProjects: true } })}
                className="project-detail-back"
            >
                ← Back
            </button>
            <h1 className='project'>All Projects</h1>
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
                    <div className='project-card-wrapper' onClick={() => navigate('/healens', { state: { fromProjects: true } })}>
                        <div className='project-card-preview' style={{ backgroundImage: `url(${healensPreview})` }}></div>
                        <div className='project-box'>
                            <img src={healImg} alt='HeaLENS' className='project-box-image' />
                            <h3 className='project-title project-box-title'>HEALense</h3>
                            <p className='project-text project-box-desc'>An AI-powered image analysis tool.</p>
                            <span className='project-box-learn-more'>Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span></span>
                        </div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
                    <div className='project-card-wrapper' onClick={() => navigate('/website', { state: { fromProjects: true } })}>
                        <div className='project-card-preview' style={{ backgroundImage: `url(${websitePreview})` }}></div>
                        <div className='project-box'>
                            <img src={websiteImg} alt='My Personal Portfolio' className='project-box-image' />
                            <h3 className='project-title project-box-title'>My Personal Portfolio</h3>
                            <p className='project-text project-box-desc'>What you&apos;re viewing right now!</p>
                            <span className='project-box-learn-more'>Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span></span>
                        </div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
                    <div className='project-card-wrapper' onClick={() => navigate('/tic-tac-toe-solver', { state: { fromProjects: true } })}>
                        <div className='project-card-preview' style={{ backgroundImage: `url(${tictactoePreview})` }}></div>
                        <div className='project-box'>
                            <img src={tictactoeImg} alt='Tic-Tac-Toe Solver' className='project-box-image' />
                            <h3 className='project-title project-box-title'>Tic-Tac-Toe Solver</h3>
                            <p className='project-text project-box-desc'>A Python-based game theory solver using graph algorithms.</p>
                            <span className='project-box-learn-more'>
                                Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span>
                            </span>
                        </div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
                    <div className='project-card-wrapper' onClick={() => navigate('/greendef', { state: { fromProjects: true } })}>
                        <div className='project-card-preview' style={{ backgroundImage: `url(${greendefPreview})` }}></div>
                        <div className='project-box'>
                            <img src={green} alt='The Green Defender' className='project-box-image' />
                            <h3 className='project-title project-box-title'>The Green Defender</h3>
                            <p className='project-text project-box-desc'>An arduino-based robotic device that monitors plant health.</p>
                            <span className='project-box-learn-more'>
                                Click to learn more <span style={{ fontSize: '1.1em', marginLeft: '4px' }}>&rarr;</span>
                            </span>
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
                <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
                    <div className='project-box'>
                        <h3 className='project-title'>Personal Mysh Terminal</h3>
                        <p className='project-text'>A Bash-like terminal emulator in C with 30+ shell features, leveraging POSIX system calls (fork/exec/pipes/signals) and implementing custom parsers for command processing, pipes, and background processes. Demonstrates low-level systems programming mastery.</p>
                        <div className='project-skills-container-2'>
                            <div className='project-skills'>C</div>
                            <div className='project-skills'>Git</div>
                        </div>
                    </div>
                </Tilt>
                <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareBorderRadius="24px" style={{ borderRadius: "24px" }}>
                    <div className='project-box'>
                        <h3 className='project-title'>Paint Application</h3>
                        <p className='project-text'>A Windows Paint-inspired application using Java, implementing core features like drawing tools, color selection, and canvas manipulation. Version-controlled with Git to demonstrate collaborative development practices.</p>
                        <div className='project-skills-container-2'>
                            <div className='project-skills'>Java</div>
                            <div className='project-skills'>Git</div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    )
}

export default Viewall


