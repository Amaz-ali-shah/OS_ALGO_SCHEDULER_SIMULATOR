import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>🧠 OS Scheduling Simulator</h1>
      <p style={styles.subtitle}>Visualize and Compare Scheduling Algorithms Easily</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '2rem',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '2.5rem',
    margin: 0,
    color: '#61dafb',
  },
  subtitle: {
    fontSize: '1rem',
    marginTop: '0.5rem',
    color: '#ccc',
  },
};

export default Header;
