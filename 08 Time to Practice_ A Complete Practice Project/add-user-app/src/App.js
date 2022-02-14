import React, {useState} from "react";
import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList,
                {name: uName, age: uAge, id: Math.random().toString()}
            ];
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <AddUser onAddUser={addUserHandler}/>
                <UsersList users={usersList}/>
            </header>
        </div>
    );
}

export default App;
