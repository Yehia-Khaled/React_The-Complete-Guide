import React, { Component } from 'react';
import './ExpenseItem.css';
import ExpenseItemDate from "./ExpenseItemDate";

class Expenseitem extends React.Component {
    render() {
        const { expenses } = this.props
        return (
            <div className='expense-item'>
                <ExpenseItemDate expenseDate={expenses.date}/>
                <div className='expense-item__description'>
                    <h2>{expenses.title}</h2>
                    <div className='expense-item__price'>${expenses.amount} </div>
                </div>
            </div>
        );
    }
}

export default Expenseitem;