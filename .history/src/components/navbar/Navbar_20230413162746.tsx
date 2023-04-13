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
  const [notifications, setNotifications] = useState(0);
  const initials = auth.user
    ? `${auth.user.fullname.charAt(0)}${auth.user.lastname.charAt(0)}`
    : "";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNotificationClick = () => {
    setNotifications(0); // clear the notifications
  };

  return (
    <nav className="nav">
      <div className="main-nav">
        <div className="logo">
          <NavLink to="/" className="nav-logo">
            <h1>
              <span className="i-word">i</span>Gammer
            </h1>
          </NavLink>
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
              <div className="user-dropdown">
                <div className="user_initials" onClick={toggleDropdown}>
                  <span> {initials} </span> 
                  {isOpen && (
                    <div className="dropdown-menu">
                      <div className="dropdown-item">
                        <button>Profile</button>
                      </div>
                      <div className="dropdown-item">
                        <button>Settings</button>
                      </div>
                      <div className="dropdown-item">
                        <button onClick={handleNotificationClick}>
                          Notifications ({notifications})
                        </button>
                      </div>
                      <div className="dropdown-item">
                        <button onClick={() => dispatch(logout())}>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
