import React, { useReducer } from 'react';
import Utils from './Utils.js';

const initalState = Array(9).fill(null);

const reducer = (state, action) => {
    let newState = [...state];
    console.log('Clicked', action.fieldIndex);
    if (state[action.fieldIndex] == null) {
        console.log('New mark');
        newState[action.fieldIndex] = 'cross';
    } else {
        console.log('Already checked');
    }

    return newState;
};

const Table = () => {
    const [fields, setFields] = useReducer(reducer, initalState);

    const renderButton = (id, state) => {
        let content = '';
        if (state === 'cross') {
            content = 'X';
        } else if (state === 'circle') {
            content = 'O';
        }

        return (
            <button
                className="tic"
                key={id}
                onClick={() => {
                    setFields({ fieldIndex: id });
                }}
            >
                {content}
            </button>
        );
    };

    return (
        <div className="table">
            <div className="table-body">
                <div className="table-row">
                    {Utils.range(0, 2).map(id => (
                        <div className="table-cell" key={id}>
                            {renderButton(id, fields[id])}
                        </div>
                    ))}
                </div>
                <div className="table-row">
                    {Utils.range(3, 5).map(id => (
                        <div className="table-cell" key={id}>
                            {renderButton(id, fields[id])}
                        </div>
                    ))}
                </div>
                <div className="table-row">
                    {Utils.range(6, 8).map(id => (
                        <div className="table-cell" key={id}>
                            {renderButton(id, fields[id])}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Table;
