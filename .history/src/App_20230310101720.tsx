import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PlayGame from "./pages/playgame/PlayGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
     <Route path="/play" element={<PlayGame />} />
     <Route path="/login" element={<Login onSubmit={function (email: string, password: string): void {
        throw new Error("Function not implemented.");
      } } />} />
    </Routes>
  );
} 

export default App;
