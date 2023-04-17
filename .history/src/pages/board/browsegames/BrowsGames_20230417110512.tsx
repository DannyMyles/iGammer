import { useState } from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./browsgames.css";
import { useNavigate } from "react-router-dom";

const BrowseGames = () => {
  const [numImages, setNumImages] = useState(6);
  const navigate = useNavigate();
  const navigateToPlay = () => {
    navigate("/Games");
  };

  const images = [
    {
      src: "/assets/images/m1.jpg",
      title: "New Game",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m4.jpeg",
      title: "New game",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m5.jpg",
      title: "Game closed",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m6.jpeg",
      title: "Game closed",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m7.jpeg",
      title: "Game closed",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m2.jpg",
      title: "Game closed",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m4.jpg",
      title: "New game",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m7.jpeg",
      title: "New game",
      description: "Continue Playing",
    },
    {
      src: "/assets/images/m6.jpeg",
      title: "Game closed",
      description: "Continue Playing",
    },
  ];

  const displayedImages = images.slice(0, numImages);

  const handleLoadMore = () => {
    setNumImages(numImages + 3); // Load 3 more images
  };

  return (
    <>
      <Navbar />
      <h2>Browse Your Games</h2>
      <div className="browse-container">
        {displayedImages.map((image, index) => (
          <div key={index} className="image">
            <img className="image__img" src={image.src} alt="backgrounImage" />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title">{image.title}</div>
              <button className="image__description" type="submit" onClick={navigateToPlay}>
                {image.description}
              </button>
            </div>
          </div>
        ))}
      </div>
      {numImages < images.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load more images
        </button>
      )}
      <Footer />
    </>
  );
};

export default BrowseGames;
