import "./login.css";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginRequest } from "../../@types";
import { useLoginMutation } from "../../app/services";
import { setCredentials } from "../../features/auth/authSlice";


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userData, setUserData] = useState<LoginRequest>({
    username: '',
    password:''
  })

  const [login, { isLoading }] = useLoginMutation()

  //handle submit form sunction
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await login(userData).unwrap()
      // console.log("User", user.data)
      const { data, status } = user
      if(status === 200){
        dispatch(setCredentials({data}))
        navigate('/games/browse-games')
      }
    } catch (error) {
      console.log("Error occured", error)
    }

  };

  const handleChange = ({target: { name, value }}: React.ChangeEvent<HTMLInputElement>) =>{
    setUserData(prev => ({ ...prev, [name]: value }))
  } 

  return (
    <>
    <Navbar />
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          className="username"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <button disabled={isLoading} type="submit">Log In</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Login;
