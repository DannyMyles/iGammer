import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque
            officiis deserunt dolor nesciunt quia impedit soluta architecto
            consequuntur, sunt doloribus harum reiciendis, quis consequatur
            eveniet natus id! Accusantium, iure aut fugiat, culpa omnis, impedit
            beatae reprehenderit vel dolorem autem modi recusandae dolores
            dignissimos delectus possimus dolor amet quas exercitationem!
          </p>
        </div>
        <div className="home-image">
          <h1>Hello</h1>
        </div>
      </div>
    <div>
    .slider-container {
  position: relative;
}

.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.slide {
  flex: 0 0 100%;
  scroll-snap-align: start;
  text-align: center;
}

.slide.active {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.slide img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease-in-out;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.next {
  right: 

    </div>
      <div className="home-container">
       <div className="home-image">
          <h1>Hello</h1>
        </div> 
        <div className="home-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque
            officiis deserunt dolor nesciunt quia impedit soluta architecto
            consequuntur, sunt doloribus harum reiciendis, quis consequatur
            eveniet natus id! Accusantium, iure aut fugiat, culpa omnis, impedit
            beatae reprehenderit vel dolorem autem modi recusandae dolores
            dignissimos delectus possimus dolor amet quas exercitationem!
          </p>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default Home;
