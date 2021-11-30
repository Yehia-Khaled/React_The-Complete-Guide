import React, { Component } from 'react';
import './ExpenseItem.css'

class Expenseitem extends React.Component {
    render() {
        const { expenses } = this.props
        return (
            <div className='expense-item'>
                <div>Date : {expenses.date.toISOString()}</div>
                <div className='expense-item__description'>
                    <h2>Title : {expenses.title}</h2>
                    <div className='expense-item__price'>Amount : ${expenses.amount} </div>
                </div>
            </div>
        );
    }
}

export default Expenseitem;