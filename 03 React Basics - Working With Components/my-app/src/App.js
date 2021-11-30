import logo from './logo.svg';
import './App.css';
import Expenseitem from './Components/ExpenseItem';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Expenseitem expenses={expenses[0]}></Expenseitem>
        <Expenseitem expenses={expenses[1]}></Expenseitem>
        <Expenseitem expenses={expenses[2]}></Expenseitem>
        <Expenseitem expenses={expenses[3]}></Expenseitem>

      </body>
    </div>
  );
}

export default App;
