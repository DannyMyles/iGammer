import Footer from "../../components/footer/Footer";
import Board from "../board/Board";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
const Games = () => {
  return (
    <>
      <Navbar />
      <div className="game-container">
        <div className="main-left">
          <div className="tiles-container">
            <div className="split-images">
              <Board
                tilesPerRow={3}
                imageUrl={"assets/images/m1.jpg"}
                width={300}
              />
            </div>
          </div>
          <div className="select-size">
            <span>Select Tiles</span>
            <div>
              <button>3*3</button>
            </div>
            <div>
              <button>4*4</button>
            </div>
          </div>
        </div>

        <div className="main-display">
          <div className="top-container">
            <div className="status">
              <span className="open">Open</span> <div className="hr"></div>
              <span className="close">Close</span>
            </div>
          </div>
          <div className="final-img-container"></div>
          <div className="pal-submit">
            <div className="pal">
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
