import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
const Games = () => {
  return (
    <>
      <Navbar />
      <div className="game-container">
        <div className="tiles-container">
          <div></div>
        </div>
        <div className="final-img-container">
          <div className="open-close">
            <span>Image</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Games;
