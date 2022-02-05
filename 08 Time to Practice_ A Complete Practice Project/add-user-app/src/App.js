import React from "react";
import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <AddUser/>
                <UsersList users={[]}/>
            </header>
        </div>
    );
}

export default App;
