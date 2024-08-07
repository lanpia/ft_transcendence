// src/static/OneOnOneGame.js

import React, { useState } from 'react';
import GameLogic from './GameLogic';

function OneOnOneGame() {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  const handleStartGame = () => {
    if (player1Name.trim() === '' || player2Name.trim() === '') {
      alert('Please enter names for both players.');
      return;
    }
    setGameOver(false);
    setGameStarted(true);
  };

  const handleGameEnd = (winnerName) => {
    setGameOver(true);
    setGameStarted(false);
    setWinner(winnerName);
  };

  return (
    <div>
      {!gameStarted && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Player 1 Name (WASD)"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
            style={{ margin: '10px' }} // Add margin for spacing
          />
          <input
            type="text"
            placeholder="Player 2 Name (Arrow Keys)"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
            style={{ margin: '10px' }} // Add margin for spacing
          />
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      )}
      {gameOver && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3>{winner} Wins!</h3>
          <button onClick={handleStartGame}>Restart Game</button>
        </div>
      )}
      {gameStarted && (
        <GameLogic
          player1Name={player1Name}
          player2Name={player2Name}
          onGameEnd={handleGameEnd}
        />
      )}
    </div>
  );
}

export default OneOnOneGame;
