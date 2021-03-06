import Expenseitem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const {expenses} = props
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectYear => {
        setFilteredYear(selectYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <Expenseitem expenses={expenses[0]}/>
            <Expenseitem expenses={expenses[1]}/>
            <Expenseitem expenses={expenses[2]}/>
            <Expenseitem expenses={expenses[3]}/>
        </Card>
    )
}

export default Expenses;