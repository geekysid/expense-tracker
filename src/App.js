import React, { useState } from 'react';
import './App.css';
import Transaction  from './components/Transaction';
import Container from './components/Container';
import AddTransaction from './components/AddTransaction';


const App = () => {
  let [transaction, setTransaction] = useState([{
    id: 0,
    transactionDate: new Date(2022, 2, 25),
    transactionTitle: "School Fee",
    transactionType: 'DEBIT',
    transactionAmount: 200
  },{
    id: 1,
    transactionDate: new Date(2022, 2, 26),
    transactionTitle: "Travel",
    transactionType: 'DEBIT',
    transactionAmount: 300
  },{
    id: 2,
    transactionDate: new Date(2022, 2, 27),
    transactionTitle: "Salary",
    transactionType: 'CREDIT',
    transactionAmount: 1000
  },{
    id: 3,
    transactionDate: new Date(2022, 2, 28),
    transactionTitle: "Vendor",
    transactionType: 'DEBIT',
    transactionAmount: 500
  },{
    id: 4,
    transactionDate: new Date(2022, 3, 1),
    transactionTitle: "Rent",
    transactionType: 'DEBIT',
    transactionAmount: 600
  },
  ]);

  const addNewTransaction = newTransaction => {
    setTransaction([
      ...transaction,
      {
        id: transaction.length === 0 ? 0 : transaction[transaction.length-1].id+1,
        ...newTransaction
      }
    ]);
  }

  const onTransactionDelete = transactionID => {
    console.log(transaction);
    console.log(transactionID)
    setTransaction(transaction.filter(item => item.id !== transactionID));
  }
  console.log(transaction);

  return (
    <div className="main">
      <h3>EXPENSE Tracker</h3>
      <AddTransaction addNewTransaction={addNewTransaction}/>
      <Container>
        { transaction.map( (item, index) => <Transaction key={ item.id  } id={ item.id  } date={ item.transactionDate } amount={ item.transactionAmount } title={ item.transactionTitle } type={ item.transactionType } onTransactionDelete={onTransactionDelete} /> )}
      </Container>
    </div>
  );
}

export default App;
