import React from 'react';

const Profile = ({ user }) => {
  const isLoggedIn = user && user.roles;

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Profile</h1>
          <h2>Username: {user.username}</h2>
          <h2>Role: {user.roles}</h2>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;