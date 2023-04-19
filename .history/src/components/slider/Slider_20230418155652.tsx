import { useState, useEffect } from "react";
import "./slider.css";

interface SliderProps {}

interface Image {
  id: string;
  urls: {
    regular: string;
  };
}

const Slider: React.FC<SliderProps> = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=8SMaVU41yCKAr5quDmmm92aslvLXGxbgQIJHA_fOuxk&per_page=10"
    )
      .then((response) => response.json())
      .then((data) =>
        setImages(
          data.map((image: any) => ({
            id: image.id,
            urls: image.urls,
          }))
        )
      )
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isPaused) {
      intervalId = setInterval(() => {
        if (currentImageIndex === images.length - 1) {
          setCurrentImageIndex(0);
        } else {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images, isPaused]);

  const handleNextClick = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handlePauseClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="slider">
      {images.length > 0 && (
        <img src={images[currentImageIndex].urls.regular} alt="sliderImage" />
      )}
      <div className="button-container">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handlePauseClick}>{isPaused ? "Play" : "Pause"}</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
