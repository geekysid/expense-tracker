import React from 'react';
import './Button.css';

const Button = props => {

    return (
        <div className={`button ${props.type}`} onClick={props.clickHandler}>
        { props.type === 'edit'? <ion-icon name="create-outline"></ion-icon> : <ion-icon name="trash-outline" title="Delete"></ion-icon> }
        </div>
    )
}

export default Button