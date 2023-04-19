
import { useState } from "react";
import { useAuth } from "../../hooks";
import "./edit.css";

const EditProfile = () => {
  const auth = useAuth();
  const [fullname, setFullname] = useState(auth.user.fullname);
  const [lastname, setLastname] = useState(auth.user.lastname);
  const [email, setEmail] = useState(auth.user.email);

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can call an API or dispatch an action to update the user's profile
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={handleFullnameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={handleLastnameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
