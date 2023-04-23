import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./browsgames.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useGetAllImagesByUserQuery } from "../../../app/services";

const BrowseGames = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const {
    data: images,
    isLoading,
    isError,
  } = useGetAllImagesByUserQuery(auth?.user?.id);
  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error loading</div>;
  // Navigation to Campaigns
  const navigateToPlay = () => {
    navigate("/Games");
  };
  return (
    <>
      <Navbar />
      <h2 className="h2">Browse Your Games</h2>
      <div className="browse-container">
        {images.map((image:any) => (
          <div className="image" key={image.id}>
            <img className="image__img" src={image.url} alt={image.title} />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title">{image.title}</div>
              <button
                className="image__description"
                type="submit"
                onClick={navigateToPlay}
              >
                Continue Playing
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;