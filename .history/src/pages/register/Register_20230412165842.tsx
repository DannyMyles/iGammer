import "./register.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useSignupMutation } from "../../app/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { User } from "../../@types";
import { setCredentials } from "../../features/auth/authSlice";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    dateOfBirth: "",
    password: "",
    gender: "",
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
        navigate("/login");
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
<<<<<<< Updated upstream
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
            value={birthDate}
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
=======
      <Navbar />
      <div className="register-container">
        <form className="registration-form" onSubmit={handleRegistration}>
          <h2>Register</h2>
          <label>
            First Name:
            <input
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              autoFocus
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Birth Date:
            <input
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          <label>
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </button>
          {isSuccess && <div>Registration successful</div>}
          {isError && <div>Error: {error}</div>}
        </form>
      </div>
      <Footer />
>>>>>>> Stashed changes
    </>
  );
};

export default Register;
