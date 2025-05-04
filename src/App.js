import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QrGenerator from './components/QrGenerator';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<QrGenerator />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
