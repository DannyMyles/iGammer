import { Route, Routes } from "react-router-dom";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/pagenotfound/NotFound";
import Register from "./pages/register/Register";
import SubmitImage from "./pages/submitImage/SubmitImage";
import BrowseGames from "./pages/board/browsegames/BrowsGames";
import RootErrorBoundary from "./pages/error-page";
import PrivateOutlet from "./utils/PrivateOutlet";
// import Profile from "./components/profile/Profile";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} errorElement={<RootErrorBoundary />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/registration"
        element={<Register/>}
      />
      <Route path="*" element={<NotFound />} />

      {/* Protected routes */}
      <Route path="/games" element={<PrivateOutlet />}>
        <Route index element={<Games />} />
        {/* <Route path="play" element={<PlayGame />} /> */}
        <Route
          path="submit-image"
          element={<SubmitImage />}
        />
        <Route path="browse-games" element={<BrowseGames />} />
      </Route>
    </Routes>
  );
}

export default App;
