import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Utils from './Utils.js';
import Config from './Config.js';

const handleFieldClick = (state, action) => {
    const changePlayer = (currentPlayer, setPlayer) => {
        if (currentPlayer === Config.playerNames.playerOne) {
            setPlayer(Config.playerNames.playerTwo);
        } else if (currentPlayer === Config.playerNames.playerTwo) {
            setPlayer(Config.playerNames.playerOne);
        } else {
            console.log('Unrecognized player');
        }
    };

    let newState = [...state];
    console.log('Clicked', action.fieldIndex);
    if (state[action.fieldIndex] == null) {
        console.log('New mark');
        newState[action.fieldIndex] = action.currentPlayer;

        changePlayer(action.currentPlayer, action.setPlayer);
        action.incRoundNumber();
    } else {
        console.log('Already checked');
    }

    return newState;
};

const calculateWinner = action => {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    if (!action.board.includes(null)) {
        console.log('Game draw');
        action.setGameState(Config.gameStates.draw);
        return 'none';
    }

    winningLines.forEach(line => {
        const [a, b, c] = line;
        if (
            action.board[a] &&
            action.board[a] === action.board[b] &&
            action.board[b] === action.board[c]
        ) {
            console.log('Game won by: ' + action.board[a]);
            action.setGameState(Config.gameStates.won);
            action.setWinner(action.board[a]);
            return action.board[a];
        }
    });

    return null;
};

const Table = props => {
    const initalState = Array(9).fill(null);
    const [fields, setFields] = useReducer(handleFieldClick, initalState);

    useEffect(() => {
        calculateWinner({
            board: fields,
            setGameState: props.setGameState,
            setWinner: props.setWinner
        });
    }, [fields]);

    const renderButton = (id, state) => {
        const getContentForState = state => {
            return state == null ? '_' : state;
        };

        let content = getContentForState(state);

        return (
            <div
                className="table-cell"
                key={id}
                onClick={() => {
                    props.gameState === Config.gameStates.ongoing
                        ? setFields({
                              fieldIndex: id,
                              currentPlayer: props.playerName,
                              setPlayer: props.setPlayerName,
                              incRoundNumber: props.incRoundNumber,
                              gameState: props.gameState
                          })
                        : console.log('Game is ended');
                }}
            >
                {content}
            </div>
        );
    };

    return (
        <div className="table">
            <div className="table-body">
                <div className="table-row">
                    {Utils.range(0, 2).map(id => renderButton(id, fields[id]))}
                </div>
                <div className="table-row">
                    {Utils.range(3, 5).map(id => renderButton(id, fields[id]))}
                </div>
                <div className="table-row">
                    {Utils.range(6, 8).map(id => renderButton(id, fields[id]))}
                </div>
            </div>
        </div>
    );
};

Table.propTypes = {
    playerName: PropTypes.string.isRequired,
    setPlayerName: PropTypes.func.isRequired,
    incRoundNumber: PropTypes.func.isRequired,
    gameState: PropTypes.string.isRequired,
    setGameState: PropTypes.func.isRequired,
    setWinner: PropTypes.func.isRequired
};

export default Table;
