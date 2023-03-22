import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import "./home.css";

const Home = () => {
   // Navigation to Campaigns
   const navigate = useNavigate();
   const navigateToSubmitImage = () => {
     navigate("/SubmitImage");
   };
   const navigateToBro = () => {
    navigate("/SubmitImage");
  };
  
  const [image, setImage] = useState([ ])
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="home-button submit-image">
          <button onClick={navigateToSubmitImage}>Submit Image</button>
        </div>
        <div className="first-cont">
          <div className="home-content">
            <div className="home-content-inner">
              <h1>Let the Game Begin!</h1>
              <span home-span>
                Welcome to our exciting online game! <br /> Thousands of dollars
                worth of games to play.
                <br /> Play now, Win and claim your prize. Play as <br /> many
                games as you can. Your game, your <br /> prize.
              </span>
            </div>
            <div className="home-button">
              <button>Browse More +</button>
            </div>
          </div>
          <div className="home-image">
            <img src="assets/images/m.png" alt="" />
          </div>
        </div>
      </div>
      <Slider images={image}/>
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
      <div className="home-button patent">
        <button>Patent Pending</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
