import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.title}>👨‍💻 Project by:</p>
      <div style={styles.namesContainer}>
        <ul style={styles.list}>
          <li style={styles.listItem}>1. Farzeen Fatima</li>
          <li style={styles.listItem}>2. Sayeda Haneen</li>
          <li style={styles.listItem}>3. Aiman Balach</li>
          <li style={styles.listItem}>4. Amaz Ali Shah</li>
          <li style={styles.listItem}>5. Abdullah Shaikh</li>
        </ul>
      </div>
      <p style={styles.note}>© 2025 OS Scheduling Simulator – All Rights Reserved</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#20232a',
    color: '#61dafb',
    padding: '2rem',
    textAlign: 'center',
    borderTop: '2px solid #61dafb',
    marginTop: 'auto',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  namesContainer: {
    display: 'flex',
    flexDirection: 'column',  // Stack the names vertically
    alignItems: 'center',     // Center them horizontally
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    margin: '0.25rem 0',
    transition: 'transform 0.2s',
    cursor: 'default',
  },
  note: {
    fontSize: '0.9rem',
    color: '#aaa',
  },
};

export default Footer;
