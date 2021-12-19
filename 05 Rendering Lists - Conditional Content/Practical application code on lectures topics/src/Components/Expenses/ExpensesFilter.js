import './Expenses.css'

function ExpensesFilter(props) {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div>
            <label>Filter by year </label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
    )
}

export default ExpensesFilter;