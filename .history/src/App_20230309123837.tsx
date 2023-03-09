import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Login onSubmit={{function (email: string, password: string): void {
        throw new Error("Function not implemented."});
      } } />
    </div>
  );
}

export default App;
