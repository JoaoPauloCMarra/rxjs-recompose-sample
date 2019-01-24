import React from 'react';

const List = ({ onChange }) => (
  <div style={styles.form}>
    <input
      style={styles.input}
      placeholder="Github username"
      onChange={onChange}
    />
  </div>
);

const styles = {
  form: {
    border: '1px solid blue',
    padding: 10
  },
  input: {
    borderColor: 'blue'
  }
};

export default List;
