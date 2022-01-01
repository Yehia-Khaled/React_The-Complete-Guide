import React from 'react';
import './Style/ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    const {items} = props
    if (items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return <ul className='expenses-list'>
        {items.map((expense) => (<ExpenseItem key={expense.id} expenses={expense}/>))}
    </ul>
};

export default ExpensesList;