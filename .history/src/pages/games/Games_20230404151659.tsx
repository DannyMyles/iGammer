import Footer from "../../components/footer/Footer";
import Profile from "../../components/profile/Profile";
import Board from "../board/Board";
// import Navbar from "../../components/navbar/Navbar";
import "./games.css";
const Games = () => {

  const handleLogout = () => {
    // Your logout logic here
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="profile-container">
            <Profile   username="John" imageUrl="https://images.unsplash.com/photo-1680184984902-94042b5550b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" onLogout={handleLogout}/>
      </div>
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
          <Board tilePerRow={3} imageUrl/>
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
