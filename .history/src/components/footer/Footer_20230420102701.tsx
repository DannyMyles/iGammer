/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const date = new Date("04/20/2023");
  return (
    <>
      <footer className="footer">
        <div className="logo_side">
          <div>
            <h2>Patent Pending</h2>{" "}
          </div>
          <div className="logo">
            <span className="i-word">i</span>Gammer
          </div>
          <div className="social_media">
            <a href="#">
              {" "}
              <BsFacebook />
            </a>
            <a href="#">
              {" "}
              <AiOutlineInstagram />{" "}
            </a>
            <a href="#">
              <AiFillTwitterCircle />{" "}
            </a>
          </div>
        </div>
        <div className="important_links">
          <h2>Important links</h2>
          <NavLink to="/" className="nav_link">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/games" className="nav_link">
            {" "}
            Games{" "}
          </NavLink>
          <NavLink to="/registration" className="nav_link">
            {" "}
            Registration{" "}
          </NavLink>
          <NavLink to="/login" className="nav_link">
            {" "}
            Login{" "}
          </NavLink>
        </div>
        <div className="signup_footer">
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </footer>
      <div className="copyright">© <span>{date.getFullYear()}</span> 2023 All Rights Reserved</div>
      
    </>
  );
};

export default Footer;
