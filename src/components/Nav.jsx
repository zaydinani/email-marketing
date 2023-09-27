import '../styles/nav.scss'
import React, { useState, useEffect, useRef } from 'react';

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
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact us</li>
          </ul>
        </div>
        {isMenuActive ? (
        <div className='mobileNavContainer'>
          <ul>
            <li>home</li>
            <li>about</li>
            <li>projects</li>
            <li>contact us</li>
          </ul>
        </div>
        ) : null}
      </nav>
    )
}
  
  export default Nav