import React, { useReducer } from 'react';
import Button from './Button.js';

const TableBody = props => {
    return (
        <div className="table">
            <div className="table-body">{props.children}</div>
        </div>
    );
};

const TableRow = props => {
    return (
        <>
            <div className="table-row">{props.children}</div>
        </>
    );
};

const TableCell = props => {
    return (
        <>
            <div className="table-cell">{props.children}</div>
        </>
    );
};

const initalState = Array(9).fill(null);

const reducer = (state, action) => {
    let newState = [...state];
    console.log('Clicked', action.fieldIndex);
    if (state[action.fieldIndex] == null) {
        console.log('null');
        newState[action.fieldIndex] = 0;
    } else {
        console.log('Already checked');
    }

    return newState;
};

const Table = () => {
    const [fields, setFields] = useReducer(reducer, initalState);

    let buttonId = 0;

    return (
        <TableBody>
            {[...Array(3)].map((e, i) => {
                return (
                    <TableRow id={i}>
                        {[...Array(3)].map((f, j) => {
                            return (
                                <TableCell id={j}>
                                    <Button
                                        id={buttonId++}
                                        onClick={setFields}
                                    />
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default Table;
