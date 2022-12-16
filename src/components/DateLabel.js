import React from 'react';
import './DateLabel.css'

const DateLabel = props =>  {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="date-label--text">{ day } { month } { year }</div>
    )
}

export default DateLabel