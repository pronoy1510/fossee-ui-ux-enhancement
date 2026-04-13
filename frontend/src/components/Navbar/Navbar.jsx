import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="/">Workshop<span>Hub</span></a>
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#workshops" onClick={() => setIsOpen(false)}>Workshops</a>
          <a href="#stats" onClick={() => setIsOpen(false)}>Statistics</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <button className="btn-login">Login</button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'line top' : 'line'}></span>
          <span className={isOpen ? 'line middle' : 'line'}></span>
          <span className={isOpen ? 'line bottom' : 'line'}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
