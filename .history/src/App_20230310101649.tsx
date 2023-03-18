import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
     <Route path="/play" element={<>} />
    </Routes>
  );
} 

export default App;