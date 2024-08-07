// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={styles.page}>
      <h2>Welcome to the Home Page</h2>
      <p>This is the main landing page of the ft_transcendence application.</p>
      <div style={styles.buttonContainer}>
        <Link to="/profile">
          <button>Go to Profile Page</button>
        </Link>
        <Link to="/game">
          <button>Go to Game Page</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', // Adds space between the buttons
    marginTop: '20px', // Adds space above the buttons
  },
};

export default HomePage;
