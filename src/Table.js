import React from 'react';
import Button from './Button.js';

const Table = () => {
    let buttonId = 0;
    return (
        <div className="table">
            <div className="table-body">
                {[...Array(3)].map((e, i) => (
                    <div className="table-row" key={i}>
                        {[...Array(3)].map((f, j) => (
                            <div className="table-cell" key={buttonId}>
                                <Button id={buttonId++} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
