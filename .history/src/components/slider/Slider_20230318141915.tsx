import "./slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
  return (
    <Carousel responsive={responsive}>
      <div className="carousel">
        <img className="game-image" src="assets/images/m1.jpg" alt="slider" />
      </div>
      <div className="carousel">
        <img src="assets/images/m2.jpg" alt="slider" />
      </div>
      <div className="carousel">
        <img src="assets/images/m1.jpg" alt="slider" />
      </div>
      <div className="carousel">
        <img src="assets/images/m1.jpg" alt="slider" />
      </div>
      <div className="carousel">
        <img src="assets/images/m2.jpg" alt="slider" />
      </div>
      <div className="carousel">
        <img src="assets/images/m1.jpg" alt="slider" />
      </div>
      <div className="carousel">
        <img src="assets/images/m1.jpg" alt="slider" />
      </div>
    </Carousel>
  );
};

export default Slider;
