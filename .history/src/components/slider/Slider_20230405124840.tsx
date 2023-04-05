// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
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
          client_id: '8SMaVU41yCKAr5quDmmm92aslvLXGxbgQIJHA_fOuxk',
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
    <div className="carousel-container">
      <Carousel ref={carouselRef} showArrows={true}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.regular} alt="" />
          </div>
        ))}
      </Carousel>
      <div className="button-container">
        <button className="prev-button" onClick={handlePrevClick}>
          &#8249;
        </button>
        <button className="next-button" onClick={handleNextClick}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Slider;
