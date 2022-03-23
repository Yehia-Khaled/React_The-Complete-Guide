import React, {useState} from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css'
import UsersList from "./UsersList";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState(''); /*Array destructing*/
    const [enteredAge, setEnteredAge] = useState(''); /*Array destructing*/

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) { /*add + before string to ensure and convert string to number */
            return;
        }
        console.log(enteredUsername, enteredAge)
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            <ErrorModal title='An error Occurred!' message='Something went wrong!'/>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" placeholder="Please Enter your Name">UserName</label>
                    <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id='age' type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>

    );
}

export default AddUser;