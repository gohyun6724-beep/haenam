import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BasicCourse from './pages/curriculum/BasicCourse';
import StandardCourse from './pages/curriculum/StandardCourse';
import AdvancedCourse from './pages/curriculum/AdvancedCourse';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum/basic" element={<BasicCourse />} />
        <Route path="/curriculum/standard" element={<StandardCourse />} />
        <Route path="/curriculum/advanced" element={<AdvancedCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
