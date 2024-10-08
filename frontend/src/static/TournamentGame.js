import React, { useState } from 'react';
import GameLogic from './GameLogic';

function TournamentGame() {
  const [playerNames, setPlayerNames] = useState(['', '', '', '']);
  const [currentMatch, setCurrentMatch] = useState(0);
  const [winners, setWinners] = useState([]); // Store winner names instead of indices
  const [tournamentOver, setTournamentOver] = useState(false);
  const [namesEntered, setNamesEntered] = useState(false);
  const [matchEnded, setMatchEnded] = useState(false);
  const [currentWinner, setCurrentWinner] = useState(null); // Use names instead of indices

  // Define the matches for a simple tournament
  const matches = [
    [0, 1], // Match 1: Player 1 vs Player 2
    [2, 3], // Match 2: Player 3 vs Player 4
    [0, 1], // Final: Winner of Match 1 vs Winner of Match 2
  ];

  const handlePlayerNameChange = (index, value) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = value;
    setPlayerNames(newPlayerNames);
  };

  const handleSubmitNames = () => {
    setNamesEntered(true);
  };

  const handleGameEnd = (score1, score2, winnerName) => {
    setCurrentWinner(winnerName);

    // Add the winner's name to the winners array
    setWinners((prevWinners) => {
      const updatedWinners = [...prevWinners];
      updatedWinners[currentMatch] = winnerName; // Update the current match's winner
      return updatedWinners;
    });
    
    setMatchEnded(true);
  };

  const handleNextMatch = () => {
    const nextMatch = currentMatch + 1;
    if (nextMatch < matches.length) {
      setCurrentMatch(nextMatch);
    } else {
      setTournamentOver(true);
    }
    setMatchEnded(false);
  };

  const handleRestartTournament = () => {
    setPlayerNames(['', '', '', '']);
    setCurrentMatch(0);
    setWinners([]);
    setTournamentOver(false);
    setNamesEntered(false);
    setMatchEnded(false);
    setCurrentWinner(null);
  };

  const renderMatch = () => {
    let player1Name, player2Name;

    // Determine player names based on current match
    if (currentMatch < 2) {
      // First two matches
      player1Name = playerNames[matches[currentMatch][0]];
      player2Name = playerNames[matches[currentMatch][1]];
    } else {
      // Final match
      player1Name = winners[0]; // Winner of match 1
      player2Name = winners[1]; // Winner of match 2
    }

    return (
      <GameLogic
        player1Name={player1Name}
        player2Name={player2Name}
        onGameEnd={handleGameEnd}
      />
    );
  };

  return (
    <div>
      {!namesEntered ? (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3>Enter Player Names</h3>
          <input
            type="text"
            placeholder="Player 1 Name (WASD)"
            value={playerNames[0]}
            onChange={(e) => handlePlayerNameChange(0, e.target.value)}
            style={{ margin: '10px' }} // Add margin for spacing
          />
          <input
            type="text"
            placeholder="Player 2 Name (Arrow Keys)"
            value={playerNames[1]}
            onChange={(e) => handlePlayerNameChange(1, e.target.value)}
            style={{ margin: '10px' }} // Add margin for spacing
          />
          <input
            type="text"
            placeholder="Player 3 Name (WASD)"
            value={playerNames[2]}
            onChange={(e) => handlePlayerNameChange(2, e.target.value)}
            style={{ margin: '10px' }} // Add margin for spacing
          />
          <input
            type="text"
            placeholder="Player 4 Name (Arrow Keys)"
            value={playerNames[3]}
            onChange={(e) => handlePlayerNameChange(3, e.target.value)}
            style={{ margin: '10px' }} // Add margin for spacing
          />
          <button onClick={handleSubmitNames} style={{ margin: '10px' }}>
            Start Tournament
          </button>
        </div>
      ) : tournamentOver ? (
        <div>
          <h3>Tournament Winner: {winners[winners.length - 1]}</h3>
          <button onClick={handleRestartTournament}>Restart Tournament</button>
        </div>
      ) : matchEnded ? (
        <div>
          <h3>Match Winner: {currentWinner}</h3>
          <button onClick={handleNextMatch}>Next Match</button>
        </div>
      ) : (
        renderMatch()
      )}
    </div>
  );
}

export default TournamentGame;
