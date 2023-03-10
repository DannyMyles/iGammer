import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="main-nav">
        <div className="logo">
          <h1>iGammer</h1>
        </div>
        <div className="links">
          <ul className="nav-list">
            <li>
              <NavLink to="/" exact activeclassName="nav-link active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" activeclassName="nav-link">
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
