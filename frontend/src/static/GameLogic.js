// src/static/GameLogic.js

import React, { useState, useEffect, useRef } from 'react';

const WINNING_SCORE = 1; // Define the winning score here

function GameLogic({ player1Name, player2Name, onGameEnd }) {
  const [gameState, setGameState] = useState({
    ball: { x: 400, y: 200, dx: 4, dy: 4 },
    paddle1: { y: 150 },
    paddle2: { y: 150 },
    score1: 0,
    score2: 0,
  });

  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(true);

  useEffect(() => {
    if (gameOver || !gameStarted) return;

    const intervalId = setInterval(updateGame, 1000 / 60);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameOver, gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      renderGame();
    }
  }, [gameState, gameStarted]);

  const handleKeyDown = (event) => {
    if (gameOver) return;

    let key = event.key;
    setGameState((prevState) => {
      let newPaddle1Y = prevState.paddle1.y;
      let newPaddle2Y = prevState.paddle2.y;

      if (key === 'ArrowUp') {
        newPaddle2Y = Math.max(prevState.paddle2.y - 30, 0);
      } else if (key === 'ArrowDown') {
        newPaddle2Y = Math.min(prevState.paddle2.y + 30, 325);
      }

      if (key === 'w' || key === 'W') {
        newPaddle1Y = Math.max(prevState.paddle1.y - 30, 0);
      } else if (key === 's' || key === 'S') {
        newPaddle1Y = Math.min(prevState.paddle1.y + 30, 325);
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
        setGameStarted(false);
        onGameEnd(newScore1 >= WINNING_SCORE ? player1Name : player2Name);
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

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="800"
        height="400"
        style={{ display: gameStarted ? 'block' : 'none', margin: '0 auto', background: '#eee' }}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span id="score1">
          {player1Name} ({gameState.score1})
        </span>{' '}
        -{' '}
        <span id="score2">
          {player2Name} ({gameState.score2})
        </span>
      </div>
    </div>
  );
}

export default GameLogic;
