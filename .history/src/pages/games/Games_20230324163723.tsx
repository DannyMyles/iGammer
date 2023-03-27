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
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div></div>
              <div>6i</div>

            </div>
          </div>
          <div className="select-size">
            <span>Select Tiles</span>
             <div>
              <button>4*4</button>{" "}
            </div>
            <div>
              <button>8*4</button>{" "}
            </div>
            <div>
              <button>16*4</button>{" "}
            </div> 
            <div>
              <button>32*4</button>
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
