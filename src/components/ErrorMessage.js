import React from 'react';

const ErrorMessage = ({ response, status }) => (
  <div style={styles.container}>
    <p style={styles.text}>
      <b>
        {status}: {response.message}
      </b>
    </p>
  </div>
);

const styles = {
  container: {
    border: '1px solid red',
    padding: 10
  },
  text: {
    color: 'red'
  }
};

export default ErrorMessage;
