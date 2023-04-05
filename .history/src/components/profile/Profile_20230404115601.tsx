import React from 'react';

interface ProfileProps {
  username: string;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ username, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <div className="profile">
    <button className="profile-button" onClick={toggleDropdown}>
      {username}
      <span className="dropdown-icon">&#9660;</span>
    </button>
    {showDropdown && (
      <div className="dropdown">
        <button className="dropdown-option" onClick={handleLogout}>
          Logout
        </button>
        <button className="dropdown-option">Settings</button>
      </div>
    )}
  </div>
  );
};

export default Profile;
