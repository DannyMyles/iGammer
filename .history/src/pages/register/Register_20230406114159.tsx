import "./register.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

type FormData = {
  firstName: string,
    lastName: string,
    email: string,
    password: string,
    birthDate: string
}


const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthDate: ""
};
const Register = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange =  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your form submission logic goes here
    // ...

    // Reset form input values to their initial state
    setFormData(initialFormData);
    console.log(formData.firstName, formData.lastName,formData.birthDate, formData.email, formData.password);
    
  };
  
  return (
    <>
    <Navbar />
    <div className="register-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Birth Date:
          <input
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
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
