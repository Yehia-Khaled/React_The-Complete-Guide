import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const {expenses} = props
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = selectYear => {
        setFilteredYear(selectYear);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No Expenses Found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expenses={expense}/>
        ));
    }
    ;

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/*Add items dynamically*/}
            {expensesContent}
            {/*Using static way*/}
            {/*<Expenseitem expenses={expenses[0]}/>
            <Expenseitem expenses={expenses[1]}/>
            <Expenseitem expenses={expenses[2]}/>
            <Expenseitem expenses={expenses[3]}/>*/}
        </Card>
    )
}

export default Expenses;