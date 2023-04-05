import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"; // import CSS file

const Navbar= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
          <span className="i-word">i</span>Gammer
      </div>
      <div className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
        <button className="navbar__menu-btn" onClick={toggleMenu}>
          <span className="navbar__menu-btn-bar" />
          <span className="navbar__menu-btn-bar" />
          <span className="navbar__menu-btn-bar" />
        </button>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/games" className="nav-link" onClick={toggleMenu}>
              Games
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/registration" className="nav-link">
              Registration
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
