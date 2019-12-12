import React from 'react';

const Button = props => {
    let content = '';
    if (props.status == 'cross') {
        content = 'X';
    } else if (props.status == 'circle') {
        content = 'O';
    }

    return (
        <button
            className="tic"
            style={{ backgroundImage: props.status }}
            onClick={() => props.onClick({ fieldIndex: props.id })}
        >
            {content}
        </button>
    );
};

export default Button;
