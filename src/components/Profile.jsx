import React from 'react';
import NewQuote from './NewQuote';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h2>Role: {user.roles}</h2>
      <NewQuote user={user} />
    </div>
  );
};

export default Profile;