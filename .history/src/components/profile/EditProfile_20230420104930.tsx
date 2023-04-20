import { useState } from "react";
import { useAuth } from "../../hooks";
import "./edit.css";

const EditProfile = () => {
  const auth = useAuth();
  const [formValues, setFormValues] = useState({
    fullname: auth.user?.fullname,
    lastname: auth.user?.lastname,
    birthdate: auth.user?.birthdate,
    gender: auth.user?.gender,
    username: auth.user?.username,
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
        <form onSubmit={handleSubmit}>
          <span>Edit your details</span>
          <div className="form_group modal-position">
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
            <label>Last Name: </label>
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
            <label>Birth Date: </label>
            <input
              type="date"
              id="email"
              name="birthdate"
              autoComplete="off"
              value={formValues.birthdate}
              onChange={handleChange}
            />
          </div>
          <div>
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
          </div>
          <div className="form_group">
            <label>Username: </label>
            <input
              type="text"
              id="email"
              name="username"
              autoComplete="off"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
   
  );
};

export default EditProfile;
