import { Route, Routes } from "react-router-dom";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/pagenotfound/NotFound";
import PlayGame from "./pages/playgame/PlayGame";
import Register from "./pages/register/Register";
import SubmitImage from "./pages/submitImage/SubmitImage";

function App() {
  const handleRegistration = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    // Handle registration logic here
    console.log(firstName, lastName, email, password);
  };

  const handleSubmit = (email: string, password: string) => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleImageSubmit = (image: File) => {
    console.log("Submitted image:", image);
    // Do something with the image, like upload it to a server
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="/SubmitImage" element={<SubmitImage onSubmit={handleImageSubmit} />} />
      <Route path="/login" element={<Login onSubmit={handleSubmit} />} />
      <Route
        path="/registration"
        element={<Register onSubmit={handleRegistration} />}
      />
      <Route path="" component={<NotFound />} />
    </Routes>
  );
}

export default App;
