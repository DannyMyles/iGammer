function App() {
  return (
    <div>
      .login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0077cc;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #0066b3;
}

    </div>
  );
}

export default App;
