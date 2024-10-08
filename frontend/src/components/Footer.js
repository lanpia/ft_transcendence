// src/components/Footer.js

import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 ft_transcendence. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
