import React from 'react';
import logo from './logo.svg';
import './App.css';
import Expenseitem from './Components/Expenses/ExpenseItem';
import Expenses from './Components/Expenses/Expenses'


function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

  /*  //Without using Jsx
    return React.createElement('div',{},
        React.createElement('h2',{},'Hi Yehia'),
        React.createElement(Expenses,{expenses:expenses})
        );*/

    //Using JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
          <Expenses expenses={expenses}/>

    </div>
  );
}

export default App;
