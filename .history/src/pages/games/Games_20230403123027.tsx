import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";

interface Puzzle {
  imageUrl: string;
  numRows: number;
  numCols: number;
}

const Games = ({ imageUrl, numRows, numCols }:Puzzle) => {
  const [pieces, setPieces] = useState([...Array(numRows * numCols)].map((_, id) => id));
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  const handlePieceClick = (id: number) => {
    if (selectedPiece === null) {
      setSelectedPiece(id);
    } else {
      setPieces((prevPieces) => {
        const newPieces = [...prevPieces];
        const index1 = newPieces.findIndex((piece) => piece === selectedPiece);
        const index2 = newPieces.findIndex((piece) => piece === id);
        [newPieces[index1], newPieces[index2]] = [newPieces[index2], newPieces[index1]];
        return newPieces;
      });
      setSelectedPiece(null);
    }
  };
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
          <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pieces.map((id) => {
        const row = Math.floor(id / numCols);
        const col = id % numCols;
        const pieceWidth = 100 / numCols;
        const pieceHeight = 100 / numRows;
        const backgroundImageStyle = {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: `${numCols * 100}% ${numRows * 100}%`,
          backgroundPosition: `-${col * pieceWidth}% -${row * pieceHeight}%`,
        };
        const pieceStyle = {
          width: `${pieceWidth}%`,
          height: `${pieceHeight}%`,
          border: selectedPiece === id ? "3px solid #000" : "3px solid transparent",
        };
        return <div key={id} style={{ ...pieceStyle, ...backgroundImageStyle }} onClick={() => handlePieceClick(id)} />;
      })}
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
