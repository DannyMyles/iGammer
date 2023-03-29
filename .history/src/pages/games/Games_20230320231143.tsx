import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
const Games = () => {
  return (
    <>
      <Navbar />
      <div className="game-container">
        <div className="tiles-container">
          <div className="split-images"></div>
          <div className="select-size">
            <div>bu 32*4</div>
            <div>16*4</div>
            <div>8*4</div>
            <div>4*4</div>
          </div>
        </div>
        <div className="main-display">
          <div className="final-img-container">
            <div className="open-close">
              <span>Image</span>
            </div>
          </div>
          <div className="pal-submit">
            <div>
              <button>Paypal</button>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Games;