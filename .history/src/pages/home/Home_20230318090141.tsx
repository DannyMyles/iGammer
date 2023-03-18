import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        .submit-image
        
        <button className="submit-image">Submit Image</button>
        <div className="first-cont">
          <div className="home-content">
            <h1>Let the Game Begin!</h1>
            <span home-span>
              Welcome to our exciting online game! <br /> Thousands of dollars
              worth of games to play.
              <br /> Play now, Win and claim your prize. Play as <br /> many
              games as you can. Your game, your <br /> prize.
            </span>
          </div>
          <div className="home-image">
            <img src="assets/images/m.png" alt="" />
          </div>
        </div>
      </div>
      <div className="home-button">
        <button>Browse More +</button>
      </div>
      <Slider />
      <div className="first-cont">
        <div className="home-image">
          <img src="assets/images/mm1.png" alt="" />
        </div>
        <div className="home-content">
          <span home-span>
            Our game is free to play and easy to access <br />
            with no downloads or installations required. <br />
            Simply log in and start playing. So what are you <br />
            waiting for? Join the adventure today and discover <br />a world of
            excitement and prizes
          </span>
        </div>
      </div>
      <div className="patent">
        <button>Patent Pending</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;