import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./browsgames.css";

const BrowseGames = () => {
  return (
    <>
      <Navbar />
      <h2>Browse Games here</h2>
      <div className="browse-container">
        <div className="image">
          <img
            className="image__img"
            src="assets/images/m1.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description">Continue Playing</button>
          </div>
        </div>
        <div className="center-container">2</div>
        <div className="right-container">3</div>
        <div className="left-container">4</div>
        <div className="center-container">5</div>
        <div className="right-container">6</div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;
