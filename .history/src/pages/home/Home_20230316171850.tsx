import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
          <button className="submit-image">Submit Image</button>
        <div className="first-cont">
          <div className="home-content">
            <spa>LET THE GAME BEGIN</spa>
          </div>
          <div className="home-image">
            <img src="assets/images/m.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
