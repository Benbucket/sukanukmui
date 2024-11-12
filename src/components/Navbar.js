// Components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">
      <h1 className="logo">
            SUKAN<span className="yellow">U</span>
            <span className="red">K</span>
            <span className="blue">M</span>
          </h1>
        <span className="tagline">Sports Booking System UKM</span>
      </div>

      
      
      <div className="menu-items">
        <Link to="/explore">Explore</Link>
        <Link to="/venues">Venues</Link>
        <Link to="/equipments">Equipments</Link>
        <Link to="/report">Report</Link>
      </div>

      <div className="nav-controls">
        <div className="language-switcher">
          <button 
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="lang-btn"
          >
            EN
          </button>
          {isLanguageOpen && (
            <div className="dropdown-menu">
              <button onClick={() => console.log('Switch to English')}>English</button>
              <button onClick={() => console.log('Switch to Malay')}>Bahasa Melayu</button>
            </div>
          )}
        </div>

        <Link to="/help" className="help-btn">Help</Link>

        <div className="profile-section">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="profile-btn"
          >
            S01001
          </button>
          {isProfileOpen && (
            <div className="dropdown-menu">
              <Link to="/profile">Profile</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;