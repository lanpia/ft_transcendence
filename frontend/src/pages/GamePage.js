// src/pages/GamePage.js

import React, { useState } from 'react';
import OneOnOneGame from '../static/OneOnOneGame'; // Assuming static/GamePage.js is renamed and moved to src/OneOnOneGame.js
import TournamentGame from '../static/TournamentGame'; // Assuming static/Tournament.js is renamed and moved to src/TournamentGame.js

function GamePage() {
  const [gameMode, setGameMode] = useState(null);

  const handleModeSelect = (mode) => {
    setGameMode(mode);
  };

  const handleBackToMenu = () => {
    setGameMode(null);
  };

  return (
    <div style={styles.page}>
      <h2>Welcome to the Game Page</h2>
      {!gameMode && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={() => handleModeSelect('one-on-one')} style={styles.button}>
            1v1 Game
          </button>
          <button onClick={() => handleModeSelect('tournament')} style={styles.button}>
            Tournament Game
          </button>
        </div>
      )}

      {gameMode === 'one-on-one' && <OneOnOneGame onBack={handleBackToMenu} />}
      {gameMode === 'tournament' && <TournamentGame onBack={handleBackToMenu} />}
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default GamePage;
