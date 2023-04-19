import { useState } from "react";
import { useAuth } from "../../hooks";
import "./edit.css";

const EditProfile = () => {
  const auth = useAuth();
  const [formValues, setFormValues] = useState({
    fullname: auth.user?.fullname,
    lastname: auth.user?.lastname,
    email: auth.user?.email,
  });

  const handleChange = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Here you can call an API or dispatch an action to update the user's profile
  };

  return (
    <div className="edit_profile">
      <div className="image_container">
        <img src="./assets/images/close.svg" alt="close" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label>Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            autoComplete="off"
            value={formValues.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <label>Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            autoComplete="off"
            value={formValues.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form_group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
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
