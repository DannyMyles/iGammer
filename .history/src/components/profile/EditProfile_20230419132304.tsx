import { useState } from "react";
import { useAuth } from "../../hooks";
import "./edit.css";

const EditProfile = () => {
  const auth = useAuth();
  const [formValues, setFormValues] = useState({
    fullname: auth.user?.fullname,
    lastname: auth.user?.lastname,
    email: auth.user?.email
    
  });

  const handleChange = (event:any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event:any) => {
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
            value={formValues.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
