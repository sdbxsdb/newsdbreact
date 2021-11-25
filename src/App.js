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

        <div className="container mx-auto px-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>

    </div>
  );
}

export default App; 