// src/pages/HomePage.js

import React from 'react';

function HomePage() {
  return (
    <div style={styles.page}>
      <h2>Welcome to the Home Page</h2>
      <p>This is the main landing page of the ft_transcendence application.</p>
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default HomePage;
