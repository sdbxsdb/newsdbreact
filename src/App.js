import "./index.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Nav from "./Nav";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from 'local-storage-fallback'

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#191919" : "#e6e6e6"};
  color: ${(props) => (props.theme.mode === "dark" ? "#e6e6e6" : "#191919")};
}`;

function getInitialTheme() {
  const savedTheme = storage.getItem('theme')
  return savedTheme ? JSON.parse(savedTheme) : { mode: "dark" }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  },[theme]);

  return (
    <ThemeProvider theme={theme}>
      
        <GlobalStyle />
        <div className="text-center w-full py-4">
          <button
            onClick={e =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          >
            Dark / Light
          </button>
        </div>
        <Nav />
        <div className="mx-auto px-4">
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </div>
      
    </ThemeProvider>
  );
}

export default App;
