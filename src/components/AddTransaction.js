import React, { useState } from 'react';
import './AddTransactions.css';
import './Container.css';

const AddTransaction = props => {

    let [title, setTitle] = useState();
    let [amount, setAmount] = useState(0);
    let [date, setDate] = useState(new Date());
    let [type, setType] = useState('CREDIT');

    const titleChangeHandler = event => setTitle(event.target.value);
    const amountChangeHandler = event => setAmount(event.target.value);
    const dateChangeHandler = event => setDate(event.target.value);
    const typeChangeHandler = event => setType(event.target.value);

    const formSubmitHandler = () => {
        const transaction = {
            transactionTitle: title,
            transactionAmount: amount,
            transactionDate: new Date(date),
            transactionType: type
        }
        setTitle("");
        setAmount("");
        setDate("");
        setType("CREDIT");
        props.addNewTransaction(transaction);
    }

  return (
    <div className="container add-transaction--container">
        <form className="add-transaction--form">
            <div type="text" className="add-transaction--form-item">
                <label className="add-transaction--form-item--label">Add Transaction</label>
                <input type="text" className="add-transaction--form-item--input" value={title} onChange={ titleChangeHandler } />
            </div>
            <div type="text" className="add-transaction--form-item">
                <label className="add-transaction--form-item--label">Amount</label>
                <input type="number" className="add-transaction--form-item--input" value={amount} min="0.1" steps="0.1" onChange={ amountChangeHandler }/>
            </div>
            <div type="text" className="add-transaction--form-item">
                <label className="add-transaction--form-item--label">Date</label>
                <input type="date" className="add-transaction--form-item--input" value={date} onChange={ dateChangeHandler } />
            </div>
            <div type="text" className="add-transaction--form-item">
                <label className="add-transaction--form-item--label" >Type</label>
                <select type="text" className="add-transaction--form-item--input" value={type} onChange={ typeChangeHandler } >
                <option value="CREDIT">Credit</option>
                <option value="DEBIT">Debit</option>
                </select>
            </div>
        </form>
        <div className="add-transaction--form---submit" onClick={formSubmitHandler}>Submit</div>
    </div>
  )
}

export default AddTransaction