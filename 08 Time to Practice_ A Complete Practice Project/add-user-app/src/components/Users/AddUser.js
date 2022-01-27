import React, {useState} from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState(''); /*Array destructing*/
    const [enteredAge, setEnteredAge] = useState(''); /*Array destructing*/

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge)
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" placeholder="Please Enter your Name">UserName</label>
                <input id='username' type="text" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id='age' type="number" onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;