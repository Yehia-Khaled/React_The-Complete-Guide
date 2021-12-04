import React from 'react';
import './ExpenseItemDate.css'

class ExpenseItemDate extends React.Component {
    render() {
        const {expenseDate} = this.props
        const month = expenseDate.toLocaleString('en-US', {month: 'long'});
        const day = expenseDate.toLocaleString('en-US', {day: '2-digit'});
        const year = expenseDate.getFullYear();
        return (
            <div className="expense-date">
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>);
    }
}

export default ExpenseItemDate;