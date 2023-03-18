import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
          <button className="">Submit Image</button>
        <div className="first-cont">
          <div>
            <h1>LET THE GAME BEGIN</h1>
          </div>
          <div>
            <img src="assets/images/m.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
