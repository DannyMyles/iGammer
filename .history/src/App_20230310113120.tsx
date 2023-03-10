import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PlayGame from "./pages/playgame/PlayGame";

function App() {

  const handleSubmit = (email: string, password: string) => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="/login"
        element={
          <Login onSubmit={handleSubmit}/>
        }
      />
      <Route path="/re"
        element={
          <Login onSubmit={handleSubmit}/>
        }
      />
    </Routes>
  );
}

export default App;
