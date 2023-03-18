import "./slider.css";
import { useState, useEffect } from "react";
const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // fetch images from API and set them in state
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="carousel">
      {/* render each image */}
      {images.map((imageUrl) => (
        <img src={imageUrl} alt="carousel" />
      ))}
    </div>
  );
};
export default Slider;