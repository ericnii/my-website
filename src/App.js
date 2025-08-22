import './App.css';
import Website from './website';
import GreenDef from './green_def';
import AppContent from './AppContent';
import ViewAll from './viewall'
import Coversume from './coversume'
import Healens from './healens'
import TicTacToeSolver from './tic-tac-toe-solver'
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
