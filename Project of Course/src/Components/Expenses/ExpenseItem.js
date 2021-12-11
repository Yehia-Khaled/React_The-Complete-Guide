import React, { Component } from 'react';
import './ExpenseItem.css';
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

class Expenseitem extends React.Component {
    render() {
        const { expenses } = this.props

        const clickHandler=()=>{
            console.log('Clicked!!')
        }
        return (
            <Card className='expense-item'>
                <ExpenseItemDate expenseDate={expenses.date}/>
                <div className='expense-item__description'>
                    <h2>{expenses.title}</h2>
                    <div className='expense-item__price'>${expenses.amount} </div>
                </div>
                <button onClick={clickHandler}> Change Title</button>
            </Card>
        );
    }
}

export default Expenseitem;