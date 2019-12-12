import React from 'react';
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

const Table = () => {
    let buttonId = 0;

    return (
        <TableBody>
            {[...Array(3)].map((e, i) => {
                return (
                    <TableRow key={i}>
                        {[...Array(3)].map((f, j) => {
                            return (
                                <TableCell key={j}>
                                    <Button id={buttonId++} />
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
