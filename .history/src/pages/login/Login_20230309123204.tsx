import "./login.css"
import { useState } from 'react';
interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}
const Login = ({onSubmit}:LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //handle submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div>
      
    </div>
  )
}

export default Login
