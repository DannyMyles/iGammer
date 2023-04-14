import { useAuth } from "../../hooks";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useState } from "react";

const Navbar = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // getting the users initials
  const initials = auth.user
    ? `${auth.user.fullname.charAt(0)}${auth.user.lastname.charAt(0)}`
    : "";
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <div className="main-nav">
        <div className="logo">
          <h1>
            <span className="i-word">i</span>Gammer
          </h1>
        </div>
        <div className="links">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" className="nav-link">
                Games
              </NavLink>
            </li>
            {auth.user ? (
              <>
                <div>
                <h3 className="user_initials" onClick={toggleDropdown}> {initials}</h3>
                {isOpen && (
                  <div className="dropdown-menu">
                    <button className="dropdown-item" >Settings</button>
                    <button className="dropdown-item"  onClick={() => dispatch(logout())}>Logout</button>
                  </div>
                )}  
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
