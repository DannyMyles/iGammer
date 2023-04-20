import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Board from "../board/Board";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";

const Games = () => {
  const [tilesPerRow, setTilesPerRow] = useState(3);

  const handleTileSelection = (numberOfTiles:number) => {
    console.log(numberOfTiles)
    setTilesPerRow(numberOfTiles);
  };

  return (
    <>
      <Navbar />
      <div className="game-container">
        <div className="main-left">
          <div className="tiles-container">
            <div className="split-images">
              <Board
                tilesPerRow={tilesPerRow}
                imageUrl={"assets/images/msq.jpg"}
                width={640}
              />
            </div>
          </div>
          <div className="select-size">
            <span>Select Tiles</span>
            <div>
              <button onClick={() => handleTileSelection(3)}>3*3</button>
            </div>
            <div>
              <button onClick={() => handleTileSelection(4)}>4*4</button>
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
            <div >
              <input type="text" placeholder="Enter Paypal Email" ></input>
            </div>
            <div className="pal">
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
