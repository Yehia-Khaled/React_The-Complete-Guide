import Expenseitem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css'

function Expenses (props){
    const {expenses} =props

    return(
        <Card className="expenses">
            <Expenseitem expenses={expenses[0]}/>
            <Expenseitem expenses={expenses[1]}/>
            <Expenseitem expenses={expenses[2]}/>
            <Expenseitem expenses={expenses[3]}/>
        </Card>
    )
}

export default Expenses;