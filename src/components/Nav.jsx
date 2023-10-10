import '../styles/nav.scss'
import React, { useState, useEffect, useRef } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Nav() {
  //-----------------
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  const closeMenu = () => {
    setIsMenuActive(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isMenuActive ? 'is-active' : ''} ${isSticky ? 'sticky' : ''}`}>
        <button className={`hamburger ${isMenuActive ? 'is-active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
        </button>
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="nav-links">
          <ul>
            <Link 
              className='navLink'
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
            >home
            </Link>
            <Link 
              className='navLink'
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70}
            >services
            </Link>
            <Link 
              className='navLink'
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70}
            >projects
            </Link>
            <Link 
              className='navLink'
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
            >contact
            </Link>
          </ul>
        </div>
        {isMenuActive ? (
        <div className='mobileNavContainer'>
          <ul>
            <Link 
              onClick={closeMenu}
              className='mobileNavLinks'
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
            >home
            </Link>
            <Link 
              onClick={closeMenu}
              className='mobileNavLinks'
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-40}
            >services
            </Link>
            <Link 
              onClick={closeMenu}
              className='mobileNavLinks'
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70}
            >projects
            </Link>
            <Link 
              onClick={closeMenu}
              className='mobileNavLinks'
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={0}
            >contact
            </Link>
          </ul>
        </div>
        ) : null}
      </nav>
    )
}
  
  export default Nav