/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram,AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo-side">
          <div className="logo"><span cl>i</span> iGammer</div>
          <div className="social-media">
            <a href="#"> <BsFacebook /></a>
            <a href="#"> <AiOutlineInstagram /> </a>
            <a href="#"><AiFillTwitterCircle/> </a>
          </div>
        </div>
        <div className="important-links">
          <h2>Important links</h2>
          <a href="#">Home</a>
          <a href="#">Games</a>
          <a href="#">Registration</a>
          <a href="#">Login</a>
        </div>
        <div className="signup-footer">
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </footer>
      <div className="copyright">© 2023 All Rights Reserved</div>
    </>
  );
};

export default Footer;
