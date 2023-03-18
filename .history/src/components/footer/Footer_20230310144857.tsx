/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="row1">
        <div className="logo">iGammer</div>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="row2">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div className="row3">
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </footer>
    
    </>
    
    
  );
};

export default Footer;
