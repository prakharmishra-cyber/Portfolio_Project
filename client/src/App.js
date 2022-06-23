import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import './App.css';

const App = () => {

  const hero_ref = useRef(null);
  const projects_ref = useRef(null);
  const about_ref = useRef(null);

  return (
    <div>
        <Navbar hero_ref={hero_ref} projects_ref={projects_ref} about_ref={about_ref}/>
        <Hero ref={hero_ref}/>
        <Projects ref={projects_ref}/>
        <About ref={about_ref}/>
    </div>
  )
}

export default App