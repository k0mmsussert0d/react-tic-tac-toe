import React from 'react';
import PropTypes from 'prop-types';
import Config from './Config.js';

import './styles.sass';

const Title = props => {
    const Round = props => {
        let message = '';
        if (props.gameState === Config.gameStates.ongoing) {
            message = 'Round ' + props.roundNumber + ': ' + props.playerName;
        } else if (props.gameState === Config.gameStates.won) {
            message = 'The winner is: ' + props.winnerName;
        } else if (props.gameState === Config.gameStates.draw) {
            message = 'Draw!';
        }

        return <p className="round">{message}</p>;
    };

    return (
        <>
            <p className="title">Tic Tac Toe</p>
            <Round
                type="playerRound"
                playerName={props.playerName}
                roundNumber={props.roundNumber}
                gameState={props.gameState}
                winnerName={props.winnerName}
            />
        </>
    );
};

export default Title;

Title.propTypes = {
    playerName: PropTypes.string.isRequired,
    roundNumber: PropTypes.number.isRequired,
    gameState: PropTypes.string.isRequired,
    winnerName: PropTypes.string
};
