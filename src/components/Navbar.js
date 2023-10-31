import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'hidden' : ''}`}>
      <div className="portfolio-title">Portfolio</div>
      <div className="nav-links">
        <Link to="header" smooth={true} duration={600}>
          Home
        </Link>
        <Link to="skills" smooth={true} duration={600}>
          Skills
        </Link>
        <Link to="experience" smooth={true} duration={600}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={600}>
          Projects
        </Link>
        <Link to="education" smooth={true} duration={600}>
          Education
        </Link>
        <Link to="contact" smooth={true} duration={600}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
