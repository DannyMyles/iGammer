import "./register.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

type RegistrationProps = {
  onSubmit: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    birthDate: string
  ) => void;
};
const Register = ({ onSubmit }: RegistrationProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");


  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(firstName, lastName, email, password,birthDate);
  };

  return (
    <>
    <Navbar />
    <div className="register-container">
      <form className="registration-form" onSubmit={handleRegistration}>
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
          Birth Date:
          <input
            type="date"
            value={lastName}
            onChange={(event) => setBirthDate(event.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </div>
    <Footer />
    </>
    
  );
};

export default Register;
