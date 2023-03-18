import "./slider.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Slider = () => {
  const [images, setImages] = useState<any>([]);
  const [currentImage, setCurrentImage] = useState<any>(0);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image:any, index:number) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
          >
            <img src={image.url} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
