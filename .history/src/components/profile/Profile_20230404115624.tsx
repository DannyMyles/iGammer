import React from 'react';

interface ProfileProps {
  username: string;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ username, onLogout }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleLogout = () => {
      onLogout();
      setShowDropdown(false);
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
