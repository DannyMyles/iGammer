import { useAuth } from "../../hooks";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useState } from "react";
import EditProfile from "../profile/EditProfile";
import Modal from "../modal/Modal";

const Navbar = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // getting the users initials
  const initials = auth.user
    ? `${auth.user.fullname.charAt(0)}${auth.user.lastname.charAt(0)}`
    : "";
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav">
      <div className="main_nav">
        <div className="logo">
          <NavLink to="/" className="nav_logo">
            <h1>
              <span className="i-word">i</span>Gammer
            </h1>
          </NavLink>
        </div>
        <div className="links">
          <ul className="nav_list">
            <li>
              <NavLink to="/" className="nav_link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/games" className="nav_link">
                Games
              </NavLink>
            </li>
            {auth.user ? (
              <div className="user_dropdown">
                <div className="user_initials" onClick={toggleDropdown}>
                  <span> {initials} </span>
                  {isOpen && (
                    <div className="dropdown_menu">
                      <div className="dropdown">
                        <span className="dropdown_span"> {initials} </span>
                      </div>
                      <div className="dropdown_item dropdown_mess">
                        <span>Welcome</span>
                        <span> {auth.user.fullname} </span>
                      </div>
                      <div>
                        <button
                          className="dropdown_item"
                          onClick={() => setIsEditModalOpen(true)}
                        >
                          Edit Profile
                        </button>
                      </div>
                      <div>
                        <button className="dropdown_item">Settings</button>
                      </div>
                      <button
                        className="dropdown_item"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
                {isEditModalOpen && (
                  <Modal setIsEditModalOpen={setIsEditModalOpen}>
                    <EditProfile  />
                  </Modal>
                )}
              </div>
            ) : (
              <>
                <li>
                  <NavLink to="/registration" className="nav_link">
                    Registration
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="nav_link">
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
