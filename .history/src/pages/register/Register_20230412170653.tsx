import "./register.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useSignupMutation } from "../../app/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupRequest, User } from "../../@types";
import { setCredentials } from "../../features/auth/authSlice";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignupRequest>({
    fullname: "",
    lastname: "",
    email: "",
    birthdate: "",
    gender: "",
    username: "",
    password: "",
  });

  const [register, { isLoading, isSuccess, isError, error }] =
    useSignupMutation();

  //handle submit form sunction
  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await register(formData).unwrap();
      const { data, status } = user;
      if (status === 200) {
        dispatch(setCredentials({ data }));
        navigate("/");
      }
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              value={formData}
              onChange={(event) => setFirstName(event.target.value)}
              required
              autoFocus
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </label>
          <label>
            Birth Date:
            <input
              type="date"
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
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
