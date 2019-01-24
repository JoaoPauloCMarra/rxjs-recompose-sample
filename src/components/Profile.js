import React from 'react';

const Profile = ({ data }) => (
  <ul style={styles.container}>
    <li style={styles.name}>{data.name}</li>
  </ul>
);

const styles = {
  container: {
    border: '1px solid green',
    padding: 5
  },
  name: {
    color: 'black'
  }
};

export default Profile;
