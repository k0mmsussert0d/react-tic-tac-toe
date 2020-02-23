import React, { useState } from 'react';
import Table from './Table.js';
import Title from './Title.js';
import Config from './Config.js';
import './styles.sass';

const App = () => {
    const [player, setPlayer] = useState(Config.playerNames.playerOne);
    const [roundNumber, setRoundNumber] = useState(1);
    const [winner, setWinner] = useState(null);
    const [gameState, setGameState] = useState(Config.gameStates.ongoing);

    return (
        <>
            <div className="app">
                <Title
                    playerName={player}
                    roundNumber={roundNumber}
                    gameState={gameState}
                    winnerName={winner}
                />
                <div className="game">
                    <Table
                        playerName={player}
                        setPlayerName={setPlayer}
                        incRoundNumber={() => setRoundNumber(roundNumber + 1)}
                        gameState={gameState}
                        setGameState={setGameState}
                        setWinner={setWinner}
                    />
                </div>
            </div>
        </>
    );
};

export default App;
