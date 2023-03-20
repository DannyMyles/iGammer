import "./slider.css";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
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

      <h1>hello</h1>
    </div><div>
    
  )
    
};

export default Slider;
