import{ useState, useEffect } from "react";
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

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=5iicn4lekMeoWOeENh2MmeIW9HiNFsRO06lq2Nyke2M&per_page=10"
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

  return (
    <div className="slider">
      {images.length > 0 && (
        <img src={images[currentImageIndex].urls.regular} alt="sliderImage" />
      )}
      <div className="button-container">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
