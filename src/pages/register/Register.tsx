import "./register.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useSignupMutation } from "../../app/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupRequest } from "../../@types";
import { setCredentials } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const [register, { isLoading, isSuccess }] = useSignupMutation();

  //handle submit form sunction
  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await register(formData).unwrap();
      const { data, status } = user;
      if (status === 201) {
        dispatch(setCredentials({ data }));
        // pass the notification message as a query parameter
        navigate("/", { state: { notification: "Registration successful!" } });
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
      <div className="register_container">
        <form className="registration_form" onSubmit={handleRegistration}>
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
            />
          </label>
          <label>
            username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              autoComplete="off"
            >
              <option disabled value="">
                Select Gender:
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <button type="submit" disabled={isLoading}>
            Register
          </button>
          <div>{isSuccess && <div>Registration successful</div>}</div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
