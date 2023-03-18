/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo-side">
          <div className="logo">iGammer</div>
          <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="important-links">
          <h1>Important links</h1>
          <a href="#">Home</a>
          <a href="#">Games</a>
          <a href="#">Link 3</a>
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
