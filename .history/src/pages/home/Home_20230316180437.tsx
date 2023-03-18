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
            <span>Welcome to our exciting online game! <br /> Thousands of dollars worth of games to play. <br />
             Play now, win and claim your prize. <br />  Play as many games as you can. Your game, your prize.</span>
          </div>
          <div className="home-image">
            <img src="assets/images/m.jpg" alt="" />
          </div>
        </div>
      </div>
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
