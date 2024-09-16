// ProfilePage.js
import React from 'react';

const ProfilePage = ({ user }) => {
  return (
    <div style={styles.container}>
      <h1>Welcome, {user?.email}!</h1>
      <p>Your profile details go here.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
};

export default ProfilePage;
