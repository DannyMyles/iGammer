import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="main-nav">
        {/* Hamburger menu icon */}
        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div className="logo">
          <h1><span className="i-word">i</span>Gammer</h1>
        </div>
        <div className="links">
          <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
            <li>
              <NavLink to="/"  className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" className="nav-link">
                Games
              </NavLink>
            </li>
            <li>
              <NavLink to="/registration" className="nav-link">
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
