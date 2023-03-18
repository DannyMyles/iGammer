import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <button className="submit-image">Submit Image</button>
        <div className="first-cont">
          <div className="home-content">
            <h1>LET THE GAME BEGIN!</h1>
            <span home-span>
              Welcome to our exciting online game! <br /> Thousands of dollars
              worth of games to play. Play now,
              <br /> Win and claim your prize. <br />
              Play as many games as you can. Your game, your prize.
            </span>
          </div>
          <div className="home-image">
            <img src="assets/images/m.jpg" alt="" />
          </div>
        </div>
      </div>
      <Slider />
      <div className="first-cont">
        <div className="home-image">
          <img src="assets/images/m.jpg" alt="" />
        </div>
        <div className="home-content">
          <span home-span>
          Our game is free to play and easy to access <br />
           with no downloads or installations required. <br />
            Simply log in and start playing. So what are you <br />
             waiting for? Join the adventure today and discover <br />
              a world of excitement and prizes
          </span>
        </div>
      </div>
      .patent
      <Footer />
    </>
  );
};

export default Home;
