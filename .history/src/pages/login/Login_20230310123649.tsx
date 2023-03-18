import "./login.css";
import { useState } from "react";

type LoginProps = {
  onSubmit: (email: string, password: string) => any;
}
const Login = ({ onSubmit }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle submit form sunction
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>LOGIN</h2>
        <label htmlFor="email">Email</label>
        <input
          className="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;