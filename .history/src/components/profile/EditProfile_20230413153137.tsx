import "edit.css"

// import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks";
// import { updateUser } from "../store/userSlice";

// const EditProfile = () => {
//   const dispatch = useAppDispatch();
//   const user = useAppSelector((state) => state.user);

//   const [formData, setFormData] = useState({
//     name: user.name,
//     email: user.email,
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(updateUser(formData));
//   };

//   return (
//     <div>
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <label htmlFor="password">New Password</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;
