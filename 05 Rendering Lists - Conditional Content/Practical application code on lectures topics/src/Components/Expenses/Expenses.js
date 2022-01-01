import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Style/Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const {expenses} = props
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectYear => {
        setFilteredYear(selectYear);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });



    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/*Add items dynamically*/}
            {/*{expensesContent}*/}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
            {/*Using static way*/}
            {/*<Expenseitem expenses={expenses[0]}/>
            <Expenseitem expenses={expenses[1]}/>
            <Expenseitem expenses={expenses[2]}/>
            <Expenseitem expenses={expenses[3]}/>*/}
        </Card>
    )
}

export default Expenses;