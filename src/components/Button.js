import React from 'react';

const Button = props => {
    return (
        <div className='button' href={props.link}>{props.text}</div>
    )
};

export default Button;
