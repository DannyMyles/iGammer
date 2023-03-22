import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./browsgames.css";

const BrowseGames = () => {
  return (
    <>
      <Navbar />
      <h3>Browse games here</h3>
      <div className="browse-container">
        <div className="left-container"></div>
        <div className="center-container"></div>
        <div className="right-container"></div>
        
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;
