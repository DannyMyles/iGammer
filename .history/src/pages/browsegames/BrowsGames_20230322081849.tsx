import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./browsgames.css";

const BrowseGames = () => {
  return (
    <>
      <Navbar />
      <div>
       <h2>Browse Games here</h2> 
       <span>Check open games</span>
      </div>
      
      <div className="browse-container">
        <div className="left-container">1</div>
        <div className="center-container">2</div>
        <div className="right-container">3</div>
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;
