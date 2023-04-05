import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // import CSS file

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar__title">{title}</h1>
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
              exact
              activeClassName="active"
              className="navbar__link"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to="/about"
              activeClassName="active"
              className="navbar__link"
              onClick={toggleMenu}
            >
              About
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
