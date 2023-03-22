import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./games.css";
const Games = () => {
  return (
    <>
      <Navbar />
      <div className="top-container">
       <div><span className="open">open</span> | <span className="">close</span></div> 
      </div>
      <div className="game-container">
        <div className="main-left">
          <div className="tiles-container">
            <div className="split-images"></div>
          </div>
          <div className="select-size">
            <span>Select tiles</span>
            <div>
              <button>32*4</button>
            </div>
            <div>
              <button>16*4</button>{" "}
            </div>
            <div>
              <button>8*4</button>{" "}
            </div>
            <div>
              <button>4*4</button>{" "}
            </div>
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
