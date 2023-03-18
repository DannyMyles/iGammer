import "./navbar.css";
import { NavLink } from "react-router-dom";
interface NavlinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="main-nav">
        <div className="logo">
          <h1><span className="i-word">i</span>Gammer</h1>
        </div>
        <div className="links">
          <ul className="nav-list">
            <li>
              <NavLink to="/" exact className="nav-link active">
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
