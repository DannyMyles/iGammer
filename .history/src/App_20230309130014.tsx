import Login from "./pages/login/Login";
export interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}
function App() {
  return (
    <>
      <Login onSubmit={onSubmit} />
    </>
  );
}

export default App;
