import { useState } from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./browsgames.css";
import { useNavigate } from "react-router-dom";

const BrowseGames = () => {
  // Navigation to Campaigns
  const navigate = useNavigate();
  const navigateToPlay = () => {
    navigate("/Games");
  };
  
  // Images data
  const images = [
    { src: "/assets/images/m1.jpg", title: "New Game" },
    { src: "/assets/images/m4.jpeg", title: "New game" },
    { src: "/assets/images/m5.jpg", title: "Game closed" },
    { src: "/assets/images/m6.jpeg", title: "Game closed" },
    { src: "/assets/images/m7.jpeg", title: "Game closed" },
    { src: "/assets/images/m2.jpg", title: "Game closed" },
    { src: "/assets/images/m3.jpg", title: "Game closed" },
    { src: "/assets/images/m8.jpg", title: "Game closed" },

    { src: "/assets/images/m2.jpg", title: "Game closed" },
    { src: "/assets/images/m3.jpg", title: "Game closed" },
    { src: "/assets/images/m8.jpg", title: "Game closed" },
  ];
  
  const [showMore, setShowMore] = useState(false);
  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  return (
    <>
      <Navbar />
      <h2>Browse Your Games</h2>
      <div className="browse-container">
        {images.slice(0, 6).map((image, index) => (
          <div className="image" key={index}>
            <img className="image__img" src={image.src} alt="backgroundImage" />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title">{image.title}</div>
              <button className="image__description" onClick={navigateToPlay}>
                Continue Playing
              </button>
            </div>
          </div>
        ))}
        {images.length > 6 && (
          <div className="show-more" onClick={toggleShowMore}>
            <i className={`fas fa-chevron-${showMore ? "up" : "down"}`} />
          </div>
        )}
        {showMore && (
          <>
            {images.slice(6).map((image, index) => (
              <div className="image" key={index}>
                <img className="image__img" src={image.src} alt="backgroundImage" />
                <div className="image__overlay image__overlay--blur">
                  <div className="image__title">{image.title}</div>
                  <button className="image__description" onClick={navigateToPlay}>
                    Continue Playing
                  </button>
                </div>
              </div>
            ))}
            <div className="show-more" onClick={toggleShowMore}>
              <i className="fas fa-chevron-up" />
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;
