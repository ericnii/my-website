import './styles/App.css';
import Website from './project-details/website';
import GreenDef from './project-details/green_def';
import AppContent from './pages/AppContent';
import ViewAll from './pages/viewall'
import Coversume from './project-details/coversume'
import Healens from './project-details/healens'
import TicTacToeSolver from './project-details/tic-tac-toe-solver'
import SportsDeck from './project-details/sportsdeck'
import CodeSus from './project-details/codesus'
import Audify from './project-details/audify'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './components/PageWrapper';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><AppContent/></PageWrapper>}/>
        <Route path="/website" element={<PageWrapper><Website /></PageWrapper>} />
        <Route path="/greendef" element={<PageWrapper><GreenDef /></PageWrapper>} />
        <Route path="/coversume" element={<PageWrapper><Coversume /></PageWrapper>} />
        <Route path="/healens" element={<PageWrapper><Healens /></PageWrapper>} />
        <Route path="/tic-tac-toe-solver" element={<PageWrapper><TicTacToeSolver /></PageWrapper>} />
        <Route path="/sportsdeck" element={<PageWrapper><SportsDeck /></PageWrapper>} />
        <Route path="/codesus" element={<PageWrapper><CodeSus /></PageWrapper>} />
        <Route path="/audify" element={<PageWrapper><Audify /></PageWrapper>} />
        <Route path="/all-projects" element={<PageWrapper><ViewAll/></PageWrapper>}/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
