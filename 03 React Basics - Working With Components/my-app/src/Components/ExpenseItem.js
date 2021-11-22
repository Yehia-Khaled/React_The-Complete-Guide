import React, { Component } from 'react';
import './ExpenseItem.css'

class Expenseitem extends React.Component {
    render() {
        const expenseDate = new Date(2021, 11, 25);
        const expenseItem = 'Car insurance';
        const expenseAmount = "294.66"
        return (
            <div className='expense-item'>
                <div>Date : {expenseDate.toISOString()}</div>
                <div className='expense-item__description'>
                    <h2>Title : {expenseItem}</h2>
                    <div className='expense-item__price'>Amount : ${expenseAmount} </div>
                </div>
            </div>
        );
    }
}

export default Expenseitem;