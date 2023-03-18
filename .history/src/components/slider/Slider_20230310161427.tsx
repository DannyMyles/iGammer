import "./slider.css"

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setImages(response.data.slice(0, 10)); // Limit to 10 images
      })
      .catch((error) => {
        console.log(error);
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
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
          >
            <img src={image.thumbnailUrl} alt={`Slide ${index}`} />
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
export default Slider
