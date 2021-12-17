import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
//Use multiple setState approach
    //use useState to set state of title
    const [enteredTitle, setEnteredTitle] = useState('') //Using array Destructing
    //use useState to set state of Amount
    const [enteredAmount, setEnteredAmount] = useState('')
    //use useState to set state of Date
    const [enteredDate, setEnteredDate] = useState('')

    /*
using single state approach
    //use one peace of state "Don't Repeat your self" -Here we need to update 3 items not gust one
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    })*/
//Handler Function
    const titleChangeHandler = (event) => {
        // console.log('Title Changed!!');
        console.log(event.target.value); //print value of user input on console
        setEnteredTitle(event.target.value);

        /*
        using single state approach
        setUserInput({
            ...userInput, //To make sure you don't lose accesses to old date from other state when update this state
            enteredTitle: event.target.value,
        })
        //Safer way to make sure you are always operate to the latest state snapshot
        setUserInput((prevstate)=>{
        return{...prevstate,enteredTitle: event.target.value };
        })*/
    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value); //print value of user input on console
        setEnteredAmount(event.target.value);

        /*
        using single state approach
        // setUserInput({
        //     ...userInput, //To make sure you don't lose accesses to old date from other state when update this state
        //     enteredAmount: event.target.value,
        // })
        //Safer way to make sure you are always operate to the latest state snapshot
        setUserInput((prevstate)=>{
            return{...prevstate,enteredAmount: event.target.value };
        })*/
    };

    const dateChangeHandler = (event) => {
        // console.log(event.target.value); //print value of user input on console
        setEnteredDate(event.target.value);

        /*
        using single state approach
        // setUserInput({
        //     ...userInput, //To make sure you don't lose accesses to old date from other state when update this state
        //     enteredDate: event.target.value,
        // })
        //Safer way to make sure you are always operate to the latest state snapshot
        setUserInput((prevstate)=>{
            return{...prevstate,enteredDate: event.target.value };
        })*/
    };

    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input
                        type="date"
                        min='2021-12-16'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm