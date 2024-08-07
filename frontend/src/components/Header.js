// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>
        <a href="/" style={styles.link}>ft_transcendence</a>
      </h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
  },
  link: {
    color: 'inherit', // inherit the header color
    textDecoration: 'none', // remove underline from link
  },
};

export default Header;
