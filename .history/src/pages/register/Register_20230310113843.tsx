import "./register.css"

interface RegistrationProps {
  onSubmit: (firstName: string, lastName: string, email: string, password: string) => void;
}
const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(firstName, lastName, email, password);
  };

  return (
    <div>
      
    </div>
  )
}

export default Register
