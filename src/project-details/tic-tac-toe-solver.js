import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tictactoeImg from '../images/tictactoe.png';
import '../pages/Projects.css';

const TicTacToeSolver = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-container">
      <button 
        onClick={() => navigate('/', { state: { scrollToProjects: true } })} 
        className="project-detail-back"
      >
        ← Back
      </button>
      
      <div className="project-detail-content">
        <div className="project-detail-text">
          <h1 className="project-detail-title">Tic-Tac-Toe Solver</h1>
          
          <p className="project-detail-desc">
            A Python-based tic-tac-toe solver that assumes perfect play and analyzes all possible moves to determine the winner for the given board. The algorithm uses the graph data structures and depth-first search to explore all possible game states.
          </p>
          
          <div className="project-detail-tech">
            <h2 className="project-detail-tech-title">Technologies Used</h2>
            <div className="project-detail-tech-list">
              <div className='project-skills'>Python</div>
              <div className='project-skills'>Graphs data structure</div>
              <div className='project-skills'>Depth-First Search</div>
            </div>
          </div>
          
          <div className="project-detail-features">
            <h2 className="project-detail-tech-title">Key Features</h2>
            <ul className="project-detail-collab-list">
              <li>Supports 3x3, 4x4, and 3x5 board sizes</li>
              <li>Analyzes ~40,000 game states for 3x3 boards</li>
              <li>Handles ~85 million game states for 4x4 boards</li>
              <li>Board representation: [["X", "", "O"], ["", "O", ""], ["X", "", ""]]</li>
            </ul>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <a 
              href="https://github.com/ericnii/Tic-Tac-Toe-Solver" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project on GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToeSolver;
