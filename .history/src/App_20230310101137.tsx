import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home>} />
      <Login onSubmit={function (email: string, password: string): void {
        throw new Error("Function not implemented.");
      } }  />
    </Routes>
  );
}

export default App;
