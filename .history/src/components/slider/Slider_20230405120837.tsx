import { useState, useEffect } from "react";
import "./slider.css";

interface SliderProps {}

type Props = {
  images: string[];
  interval?: number;
  height?: string;
};
const Slider: React.FC<SliderProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [currentSlide, images.length, interval]);

  return (
    <div className="carousel-wrapper" style={{ height }}>
      <div className="carousel-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel slide ${index}`}
            className="carousel-slide"
            style={{ height }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
