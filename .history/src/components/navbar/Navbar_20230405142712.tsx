import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // import CSS file


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar__title">iGamer</h1>
      <div className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="navbar__menu-btn" onClick={toggleMenu}>
          <span className="navbar__menu-btn-bar" />
          <span className="navbar__menu-btn-bar" />
          <span className="navbar__menu-btn-bar" />
        </button>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink
              to="/"
              className="navbar__link"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/about"
              className="navbar__link"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/contact"
              className="navbar__link"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
