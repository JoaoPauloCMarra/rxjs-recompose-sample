import React from 'react';

const Loading = () => (
  <div style={styles.container}>
    <p style={styles.text}>loading...</p>
  </div>
);

const styles = {
  container: {
    padding: 10
  },
  text: {
    color: 'grey'
  }
};

export default Loading;
