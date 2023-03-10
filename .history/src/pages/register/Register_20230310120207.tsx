import "./register.css";
import { useState } from "react";

type RegistrationProps = {
  onSubmit: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void;
};
const Register = ({ onSubmit }: RegistrationProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(firstName, lastName, email, password);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
    <h2>Register</h2>
    <label>
      First Name:
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
    </label>
    <label>
      Last Name:
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
    </label>
    <label>
      Email:
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </label>
    <label>
      Password:
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </label>
    <button type="submit">Submit</button>
  </form>
  );
};

export default Register;
