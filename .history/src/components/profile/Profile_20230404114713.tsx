import React from 'react'

const Profile = () => {
  return (
    <div>
      
    </div>
  )
}

export default Profile


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
      <div className="profile__username" onClick={handleDropdownClick}>
        {username}
        <i className={`fa fa-caret-${isDropdownOpen ? 'up' : 'down'}`} />
      </div>
      {isDropdownOpen && (
        <div className="profile__dropdown">
          <button className="profile__dropdown-item">Settings</button>
          <button className="profile__dropdown-item" onClick={handleLogoutClick}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
