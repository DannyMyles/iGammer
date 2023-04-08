import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./slider.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Image {
  id: string;
  urls: {
    regular: string;
  };
}

const Slider = () => {
  const [images, setImages] = useState<Image[]>([]);
  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get<Image[]>('https://api.unsplash.com/photos', {
        params: {
          client_id: 'YOUR_UNSPLASH_ACCESS_KEY',
          per_page: 10,
        },
      });
      setImages(response.data);
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div>
      <Carousel ref={carouselRef} showArrows={true}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.regular} alt="" />
          </div>
        ))}
      </Carousel>
      <div>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
