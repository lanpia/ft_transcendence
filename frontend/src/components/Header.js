// src/components/Header.js

import React, { useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic for logging in (e.g., authentication)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing session)
    setIsLoggedIn(false);
  };

  return (
    <header style={styles.header}>
      <h1>
        <a href="/" style={styles.link}>ft_transcendence</a>
      </h1>
      <div>
        {isLoggedIn ? (
          <button style={styles.button} onClick={handleLogout}>Logout</button>
        ) : (
          <button style={styles.button} onClick={handleLogin}>Login</button>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: 'inherit', // inherit the header color
    textDecoration: 'none', // remove underline from link
  },
  button: {
    backgroundColor: '#61dafb',
    border: 'none',
    padding: '10px 20px',
    color: 'black',
    cursor: 'pointer',
    borderRadius: '5px',
    marginLeft: '10px',
  },
};

export default Header;
