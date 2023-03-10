import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" component={Login} />
      <Login onSubmit={function (email: string, password: string): void {
        throw new Error("Function not implemented.");
      } }  />
    </Routes>
  );
}

export default App;
