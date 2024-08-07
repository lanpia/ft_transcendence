// src/pages/GamePage.js

import React, { useState, useEffect, useRef } from 'react';

const WINNING_SCORE = 5; // Define the winning score here

function Game() {
  const [gameState, setGameState] = useState({
    ball: { x: 400, y: 200, dx: 4, dy: 4 },
    paddle1: { y: 150 },
    paddle2: { y: 150 },
    score1: 0,
    score2: 0,
  });

  const canvasRef = useRef(null);
  const player1NameRef = useRef('Player 1');
  const player2NameRef = useRef('Player 2');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;

    const intervalId = setInterval(updateGame, 1000 / 60);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameOver]);

  useEffect(() => {
    renderGame();
  }, [gameState]);

  const handleKeyDown = (event) => {
    if (gameOver) return;

    let key = event.key;
    setGameState((prevState) => {
      let newPaddle1Y = prevState.paddle1.y;
      let newPaddle2Y = prevState.paddle2.y;

      if (key === 'ArrowUp') {
        newPaddle2Y = Math.max(prevState.paddle2.y - 10, 0);
      } else if (key === 'ArrowDown') {
        newPaddle2Y = Math.min(prevState.paddle2.y + 10, 325);
      }

      if (key === 'w') {
        newPaddle1Y = Math.max(prevState.paddle1.y - 10, 0);
      } else if (key === 's') {
        newPaddle1Y = Math.min(prevState.paddle1.y + 10, 325);
      }

      return {
        ...prevState,
        paddle1: { y: newPaddle1Y },
        paddle2: { y: newPaddle2Y },
      };
    });
  };

  const updateGame = () => {
    setGameState((prevState) => {
      let newBallX = prevState.ball.x + prevState.ball.dx;
      let newBallY = prevState.ball.y + prevState.ball.dy;
      let newDx = prevState.ball.dx;
      let newDy = prevState.ball.dy;
      let newScore1 = prevState.score1;
      let newScore2 = prevState.score2;

      // Bounce off the top and bottom walls
      if (newBallY <= 0 || newBallY >= 390) {
        newDy *= -1;
      }

      // Paddle collision detection
      if (
        newBallX <= 20 &&
        newBallY >= prevState.paddle1.y &&
        newBallY <= prevState.paddle1.y + 75
      ) {
        newDx *= -1;
      } else if (
        newBallX >= 770 &&
        newBallY >= prevState.paddle2.y &&
        newBallY <= prevState.paddle2.y + 75
      ) {
        newDx *= -1;
      }

      // Scoring
      if (newBallX <= 0) {
        newScore2 += 1;
        newBallX = 400;
        newBallY = 200;
        newDx = Math.random() < 0.5 ? -4 : 4;
        newDy = Math.random() < 0.5 ? -4 : 4;
      } else if (newBallX >= 800) {
        newScore1 += 1;
        newBallX = 400;
        newBallY = 200;
        newDx = Math.random() < 0.5 ? -4 : 4;
        newDy = Math.random() < 0.5 ? -4 : 4;
      }

      if (newScore1 >= WINNING_SCORE || newScore2 >= WINNING_SCORE) {
        setGameOver(true);
        return {
          ...prevState,
          ball: { x: 400, y: 200, dx: 0, dy: 0 }, // Stop ball movement
          score1: newScore1,
          score2: newScore2,
        };
      }

      return {
        ...prevState,
        ball: { x: newBallX, y: newBallY, dx: newDx, dy: newDy },
        score1: newScore1,
        score2: newScore2,
      };
    });
  };

  const renderGame = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    context.fillStyle = '#0095DD';
    context.fillRect(10, gameState.paddle1.y, 10, 75);
    context.fillRect(780, gameState.paddle2.y, 10, 75);

    // Draw ball
    context.beginPath();
    context.arc(gameState.ball.x, gameState.ball.y, 10, 0, Math.PI * 2);
    context.fillStyle = '#0095DD';
    context.fill();
    context.closePath();
  };

  const handleStartGame = () => {
    const player1Name = prompt('Enter Player 1 Name (WASD):') || 'Player 1';
    const player2Name = prompt('Enter Player 2 Name (Arrow Keys):') || 'Player 2';

    player1NameRef.current = player1Name;
    player2NameRef.current = player2Name;
    setGameOver(false);

    // Reset game state
    setGameState({
      ball: { x: 400, y: 200, dx: 4, dy: 4 },
      paddle1: { y: 150 },
      paddle2: { y: 150 },
      score1: 0,
      score2: 0,
    });
  };

  return (
    <div>
      {gameOver && (
        <div>
          <h3>
            {gameState.score1 >= WINNING_SCORE
              ? `${player1NameRef.current} Wins!`
              : `${player2NameRef.current} Wins!`}
          </h3>
          <button onClick={handleStartGame}>Restart Game</button>
        </div>
      )}
      <button onClick={handleStartGame}>Start Game</button>
      <canvas
        ref={canvasRef}
        width="800"
        height="400"
        style={{ display: 'block', margin: '0 auto', background: '#eee' }}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span id="score1">
          {player1NameRef.current} ({gameState.score1})
        </span>{' '}
        -{' '}
        <span id="score2">
          {player2NameRef.current} ({gameState.score2})
        </span>
      </div>
    </div>
  );
}

function GamePage() {
  return (
    <div style={styles.page}>
      <h2>Welcome to the Game Page</h2>
      <p>This is the game page of the ft_transcendence application.</p>
      <Game />
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default GamePage;
