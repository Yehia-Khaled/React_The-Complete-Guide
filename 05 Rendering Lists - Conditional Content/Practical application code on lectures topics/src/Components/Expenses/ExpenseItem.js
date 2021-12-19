import React from 'react';
import './ExpenseItem.css';
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";
// import {useState} from "react";

//using function component
const Expenseitem = (props) => {
    const {expenses} = props

    // const [title, setTitle] = useState(expenses.title); //first element is the current state value, and the second is  a function for updating that.
    // console.log('ExpenseItem evaluated by react')
    /*    // let title = expenses.title;
        const clickHandler = () => {
            // console.log('Clicked!!')
            setTitle('Update!!') // we use this to execute function again after click or call this function or event happen

            // title = 'Update!!'
            console.log(title);
        }*/

    return (
        <Card className='expense-item'>
            <ExpenseItemDate expenseDate={expenses.date}/>
            <div className='expense-item__description'>
                <h2>{expenses.title}</h2>
                <div className='expense-item__price'>${expenses.amount} </div>
            </div>
            {/*<button onClick={clickHandler}> Change Title</button>*/}
        </Card>
    );
}

/*
//Using class Component
class Expenseitem extends React.Component {
    render() {

        return (

        );
    }
}
*/

export default Expenseitem;