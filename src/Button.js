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
            onClick={() => console.log('Button ' + props.id + ' clicked!')}
        >
            {content}
        </button>
    );
};

export default Button;
