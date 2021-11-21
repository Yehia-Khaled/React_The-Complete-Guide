import logo from './logo.svg';
import './App.css';
import Expenseitem from './Components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <body>
        <Expenseitem></Expenseitem>
      </body>
    </div>
  );
}

export default App;
