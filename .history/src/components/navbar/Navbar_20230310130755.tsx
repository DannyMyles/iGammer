import './navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        {/* <img src={} alt="logo" /> */}
        <h1></h1>
      </div>
      <div>
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-link active">
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
    </nav>
  )
}

export default Navbar
