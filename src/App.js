import React from "react";

import "./index.css";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Route, Routes, Link } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <div className="bg-red-300">

      <Nav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
  
        </Routes>

    </div>
  );
}

export default App; 