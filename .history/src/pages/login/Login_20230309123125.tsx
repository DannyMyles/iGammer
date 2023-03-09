import "./login.css"
import React, { useState } from 'react';
interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}
const Login = ({onSubmit}:LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      
    </div>
  )
}

export default Login
