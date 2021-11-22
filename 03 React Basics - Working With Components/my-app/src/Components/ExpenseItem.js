import React, { Component } from 'react';
import './ExpenseItem.css'

class Expenseitem extends React.Component {
    render() {
        return (
            <div className='expense-item'>
                <div>Date :</div>
                <div className='expense-item__description'>
                    <h2>Title: </h2>
                    <div className='expense-item__price'>Amount: </div>
                </div>
            </div>
        );
    }
}

export default Expenseitem;