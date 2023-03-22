import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./browsgames.css";

const BrowseGames = () => {
  return (
    <>
      <Navbar />
      <h3>Browse games here</h3>
      <div className="browse-container">
        <div className="left-container">1</div>
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
