import logo from './logo.svg';
import './App.css';
import Expenseitem from './Components/ExpenseItem';
import Expenses from './Components/Expenses'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
          <Expenses/>

    </div>
  );
}

export default App;
