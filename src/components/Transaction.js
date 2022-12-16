import React, { useState } from "react";
import './Transaction.css';
import DateLabel from './DateLabel';
import Button from './Button';

const Transaction = props => {

    const [amount, setAmount] = useState(props.amount);
    const [newAmount, setNewAmount] = useState(0);
    const [title, setTitle] = useState(props.title);

    const editBtnHandler = () => {
        const newTitle = prompt("Enter new Title");
        setTitle(newTitle ? newTitle : title);
    }

    const editAmountHandler = () => {
        setAmount(newAmount);
        setNewAmount(0);
    }

    const deleteBtnHandler = () => {
        props.onTransactionDelete(props.id);
    }

    const changeHandler = event => setNewAmount(event.target.value);
    console.log(props.id);

    return (
        <div className="transaction">
            <DateLabel date={ props.date } />
            <div className="transaction--desc">
                <div className="transaction--desc-text">{ title }</div>
                <div className={ `transaction--desc-amount ${props.type === 'CREDIT' ? 'transaction--credit' : 'transaction--debit' }` }>${ amount }</div>
            </div>
            <Button type="edit" clickHandler={ editBtnHandler } title="EDIT TITLE" />
            <Button type="edit" clickHandler={ editAmountHandler } title="EDIT AMOUNT" />
            <input type="text" size="5" onChange={ changeHandler } value={ newAmount } />
            <Button type="delete" clickHandler={ deleteBtnHandler } />
        </div>
    );
}

export default Transaction;