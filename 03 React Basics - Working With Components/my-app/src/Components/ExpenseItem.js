import React, { Component } from 'react';
import './ExpenseItem.css'

class Expenseitem extends React.Component {
    render() {
        const { expenses } = this.props
        const month=expenses.date.toLocaleString('en-US',{ month : 'long'});
        const day=expenses.date.toLocaleString('en-US',{ day : '2-digit'});
        const year =expenses.date.getFullYear();

        return (
            <div className='expense-item'>
                <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
                </div>
                <div className='expense-item__description'>
                    <h2>Title : {expenses.title}</h2>
                    <div className='expense-item__price'>Amount : ${expenses.amount} </div>
                </div>
            </div>
        );
    }
}

export default Expenseitem;