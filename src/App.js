import './App.css';
import Website from './website';
import GreenDef from './green_def';
import AppContent from './AppContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter basename="/my-website">
        <Routes>
          <Route path="/" element={<AppContent/>}/>
          <Route path="/website" element={<Website />} />
          <Route path="/greendef" element={<GreenDef />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
