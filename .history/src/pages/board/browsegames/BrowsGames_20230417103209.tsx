import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./browsgames.css";
import { useNavigate } from "react-router-dom";

const BrowseGames = () => {
  const navigate = useNavigate();
  const navigateToPlay = () => {
    navigate("/games");
  };

  const games = [
    {
      id: 1,
      title: "New Game",
      image: "/assets/images/m1.jpg",
      status: "playing",
    },
    {
      id: 2,
      title: "New game",
      image: "/assets/images/m2.jpg",
      status: "paused",
    },
    {
      id: 3,
      title: "Game closed",
      image: "/assets/images/m4.jpeg",
      status: "closed",
    },
    {
      id: 4,
      title: "Game closed",
      image: "/assets/images/m5.jpg",
      status: "closed",
    },
    {
      id: 5,
      title: "Game closed",
      image: "/assets/images/m6.jpeg",
      status: "paused",
    },
    {
      id: 6,
      title: "Game closed",
      image: "/assets/images/m7.jpeg",
      status: "paused",
    },
    {
      id: 7,
      title: "New Game",
      image: "/assets/images/m1.jpg",
      status: "playing",
    },
    {
      id: 8,
      title: "New game",
      image: "/assets/images/m2.jpg",
      status: "paused",
    },
    {
      id: 9,
      title: "Game closed",
      image: "/assets/images/m4.jpeg",
      status: "closed",
    },
    {
      id: 10,
      title: "Game closed",
      image: "/assets/images/m5.jpg",
      status: "closed",
    },
    {
      id: 11,
      title: "Game closed",
      image: "/assets/images/m6.jpeg",
      status: "paused",
    },
    {
      id: 12,
      title: "Game closed",
      image: "/assets/images/m7.jpeg",
      status: "paused",
    },
  ];

  const gamesToDisplay = games.slice(0, 6);

  return (
    <>
      <Navbar />
      <h2>Browse Your Games</h2>
      <div className="browse-container">
        {gamesToDisplay.map((game) => (
          <div className="image" key={game.id}>
            <img className="image__img" src={game.image} alt={game.title} />
            <div className="image__overlay image__overlay--blur">
              <div className="image__title">{game.title}</div>
              {game.status === "playing" && (
                <button
                  className="image__description"
                  type="submit"
                  onClick={navigateToPlay}
                >
                  Continue Playing
                </button>
              )}
              {game.status === "paused" && (
                <button className="image__description">Resume</button>
              )}
              {game.status === "closed" && (
                <button className="image__description">Play</button>
              )}
            </div>
          </div>
        ))}
        {games.length > 6 && (
          <button className="view-more" onClick={() => navigate("/all-games")}>
            View More
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BrowseGames;

