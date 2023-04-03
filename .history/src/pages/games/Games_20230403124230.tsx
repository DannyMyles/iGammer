import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
const Games = ({ imageUrl, numRows, numCols }:) => {
  const [pieces, setPieces] = useState([...Array(numRows * numCols)].map((_, id) => id));
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

  const handlePieceClick = (id: number) => {
    if (selectedPiece === null) setSelectedPiece(id);
    else {
      const newPieces = [...pieces];
      [newPieces[pieces.indexOf(selectedPiece)], newPieces[pieces.indexOf(id)]] = [id, selectedPiece];
      setPieces(newPieces);
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
          <div className="puzzle-container">
            <div className="puzzle-pieces">
              {pieces.map((id) => (
                <div
                  key={id}
                  className={`puzzle-piece ${
                    selectedPiece === id ? "selected" : ""
                  }`}
                  style={{
                    width: `${100 / numCols}%`,
                    height: `${100 / numRows}%`,
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: `${numCols * 100}% ${numRows * 100}%`,
                    backgroundPosition: `-${
                      (id % numCols) * (100 / numCols)
                    }% -${Math.floor(id / numCols) * (100 / numRows)}%`,
                  }}
                  onClick={() => handlePieceClick(id)}
                />
              ))}
            </div>
            <div
              className="puzzle-preview"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
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
