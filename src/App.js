import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WaitlistLandingPage from './pages/Waitlist';
import Founders from './pages/Founders';

function App() {
  return (
    <div className='main-bg-controller'>
      <Router>
        <Routes>
          <Route path='/' element={<WaitlistLandingPage />} />
          <Route path='/founders' element={<Founders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
