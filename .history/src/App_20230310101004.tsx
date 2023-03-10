import { Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <>
      <Login onSubmit={function (email: string, password: string): void {
        throw new Error("Function not implemented.");
      } }  />
    </>
    </Routes>
  );
}

export default App;
