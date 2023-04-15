import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./browsgames.css";
import { useNavigate } from "react-router-dom";

const BrowseGames = () => {
  // Navigation to Campaigns
  const navigate = useNavigate();
  const navigateToPlay = () => {
    navigate("/games");
  };
  return (
    <>
      <Navbar />
      <h2>Browse Your Games</h2>
      <div className="browse-container">
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m1.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">New Game</div>
            <button className="image__description" type="submit" onClick={navigateToPlay}>Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m2.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">New game</div>
            <button className="image__description">Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m4.jpeg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description">Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m1.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description">Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m1.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description" type="submit" onClick={navigateToPlay}>Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m1.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description" type="submit" onClick={navigateToPlay}>Continue Playing</button>
          </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;

