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

  const [register, { isLoading}] = useSignupMutation();

  //handle submit form sunction
  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const user = await register(formData).unwrap();
      console.log("User",user)
      const { data, status } = user;
      if (status === 200) {
        dispatch(setCredentials({ data }));
        navigate("/");
        
      }
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
            Full Name:
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              autoFocus
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Birth Date:
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            username:
            <input
              type="text"
              name="fullname"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option disabled value="">Select gender:</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit" disabled={isLoading}>Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
