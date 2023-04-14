import { useAuth } from "../../hooks";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const auth = useAuth();
  const dispatch = useDispatch()

  // getting the users initials
  const initials = auth.user ? `${auth.user.fullname.charAt(0)}${auth.user.lastname.charAt(0)}` : "";
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
              <> <span>Welcome</span>
                <h3 className="user_initials"> {initials}</h3>
                <button onClick={()=> dispatch(logout())}>logout</button>
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
