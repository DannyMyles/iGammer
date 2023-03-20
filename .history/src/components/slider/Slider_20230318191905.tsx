import "./slider.css";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
const Slider = ({ images }:any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        Prev
      </button>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt={`carousel ${currentImageIndex}`}
      />
      <button className="carousel-button next" onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default Slider;
