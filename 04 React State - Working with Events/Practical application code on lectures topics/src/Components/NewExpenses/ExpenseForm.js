import React from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        // console.log('Title Changed!!');
        console.log(event.target.value); //print value of user input on console
    };
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min='0.01' stap='0.01'/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min='2021-12-16' max='2022-12-31'/>
                </div>
            </div>
            <div className="new-expense_actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm