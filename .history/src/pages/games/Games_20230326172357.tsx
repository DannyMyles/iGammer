import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
const Games = () => {
  return (
    <>
      <Navbar />
      <div className="top-container">
        <div className="status">
          <span className="open">Open</span> <div className="hr"></div>
          <span className="close">Close</span>
        </div>
      </div>
      <div className="game-container">
        <div className="main-left">
          <div className="tiles-container">
            <div className="split-images">
              <div className="row-one">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>

            </div>
          </div>
          <div className="sliding-puzzle">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="puzzle-piece"
          style={{
            gridRow: `${piece.row + 1} / span 1`,
            gridColumn: `${piece.col + 1} / span 1`,
            background: `url(${piece.image}) -${piece.col * (500 / cols)}px -${piece.row * (500 / rows)}px`,
            backgroundSize: `${500}px ${500}px`,
          }}
          onClick={() => handlePieceClick(piece)}
        />
      ))}
    </div>
        </div>

        <div className="main-display">
          <div className="final-img-container">
            <div className="open-close">
              <span>Image Here</span>
            </div>
          </div>
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