
// src/components/Navbar.js
import React, { useState,useEffect, useRef  } from 'react';
import './Navbar2.css';
import { CiLight } from "react-icons/ci";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);

  };
  const [DarkMode , setDarkMode] = useState(false);
  const [sections] = useState([
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' },
    { id: 'projects', title: 'projects' },
  ])

  useEffect(() => {
    if (DarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [DarkMode,isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-brand">LOkesh</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
      {sections.map(section => (
          <li key={section.id} className='py-1 my-2' >
            <a style={{color:"white"}} href={`#${section.id}`} onClick={() => scrollToSection(section.id)}>
              {section.title}
            </a>
          </li>
        ))}
      </div>
        <div> <CiLight  size={"1.8rem"} color='white' onClick={toggleDarkMode}  /> </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar2;
