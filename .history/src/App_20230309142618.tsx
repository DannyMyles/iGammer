import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Login onSubmit={function (email: string, password: string): void {
        throw new Error("Function not implemented.");
      } }  />
    </>
  );
}

export default App;
