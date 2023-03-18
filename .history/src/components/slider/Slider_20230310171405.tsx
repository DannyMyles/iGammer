import "./slider.css";
import { useState, useEffect } from "react";
type ImageCarouselProps {
  albumId: number;
}

interface Image {
  id: number;
  url: string;
}
const Slider = ({ albumId }: ImageCarouselProps) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, [albumId]);

  return (
    <div className="carousel">
      {images.map((image) => (
        <img key={image.id} src={image.url} alt="carousel" />
      ))}
    </div>
  );
}

export default Slider;
