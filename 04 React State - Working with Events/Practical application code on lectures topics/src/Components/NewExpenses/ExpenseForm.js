import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    //Use multiple setState
    //use useState to set state of title
    const [enteredTitle, setEnteredTitle] = useState('') //Using array Destructing
    //use useState to set state of Amount
    const [enteredAmount, setEnteredAmount] = useState('')
    //use useState to set state of Date
    const [enteredDate, setEnteredDate] = useState('')

//Handler Function
    const titleChangeHandler = (event) => {
        // console.log('Title Changed!!');
        console.log(event.target.value); //print value of user input on console
        setEnteredTitle(event.target.value);

    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value); //print value of user input on console
        setEnteredTitle(event.target.value);

    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value); //print value of user input on console
        setEnteredTitle(event.target.value);

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