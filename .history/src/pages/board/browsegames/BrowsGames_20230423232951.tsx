import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./browsgames.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useGetAllImagesByUserQuery } from "../../../app/services";


const BrowseGames = () => {
  const navigate = useNavigate();
  const auth = useAuth()
 const { data: images, isLoading , isError } = useGetAllImagesByUserQuery(auth?.user?.id)
  if(isLoading) return <div>Loading....</div>
  if(isError) return <div>Oops! Error loading</div>
  
  // Navigation to Campaigns
  const navigateToPlay = () => {
    navigate("/Games");
  };
  return ( 
    <>
      <Navbar />
      <h2 className="h2">Browse Your Games</h2>
      <div className="browse-container">
        <div className="image">
          {
            images.data.map((image:string)=>(
              <div className="image-container">
                <img
            className="image__img"
            src={images}
            alt="backgrounImage"
          />
              </div>
            ))
          }
          
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">New Game</div>
            <button className="image__description" type="submit" onClick={navigateToPlay}>Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m4.jpeg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">New game</div>
            <button className="image__description">Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m5.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description">Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m6.jpeg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description">Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m7.jpeg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description" type="submit" onClick={navigateToPlay}>Continue Playing</button>
          </div>
        </div>
        <div className="image">
          <img
            className="image__img"
            src="/assets/images/m2.jpg"
            alt="backgrounImage"
          />
          <div className="image__overlay image__overlay--blur">
            <div className="image__title">Game closed</div>
            <button className="image__description" type="submit" onClick={navigateToPlay}>Continue Playing</button>
          </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;
