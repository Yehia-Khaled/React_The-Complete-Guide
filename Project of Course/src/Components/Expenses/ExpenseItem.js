import React, { Component } from 'react';
import './ExpenseItem.css';
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

class Expenseitem extends React.Component {
    render() {
        const { expenses } = this.props

        let title = expenses.title;
        const clickHandler = () => {
            // console.log('Clicked!!')
            title = 'Updated!!'
            console.log(title);
        }
        return (
            <Card className='expense-item'>
                <ExpenseItemDate expenseDate={expenses.date}/>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${expenses.amount} </div>
                </div>
                <button onClick={clickHandler}> Change Title</button>
            </Card>
        );
    }
}

export default Expenseitem;