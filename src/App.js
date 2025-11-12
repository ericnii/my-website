import './styles/App.css';
import Website from './project-details/website';
import GreenDef from './project-details/green_def';
import AppContent from './pages/AppContent';
import ViewAll from './pages/viewall'
import Coversume from './project-details/coversume'
import Healens from './project-details/healens'
import TicTacToeSolver from './project-details/tic-tac-toe-solver'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContent/>}/>
          <Route path="/website" element={<Website />} />
          <Route path="/greendef" element={<GreenDef />} />
          <Route path="/coversume" element={<Coversume />} />
          <Route path="/healens" element={<Healens />} />
          <Route path="/tic-tac-toe-solver" element={<TicTacToeSolver />} />
          <Route path="/all-projects" element={<ViewAll/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
