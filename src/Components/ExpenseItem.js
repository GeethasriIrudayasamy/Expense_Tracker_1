import "./ExpenseItem.css";

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 8, 12);
    // const expenseTitle = "Birthday Cake";
    // const expenseAmount = "Rs.1209";
    // const LocationOfExpenditure = "Bakery";
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__description">
                <h2>{props.location}</h2>
            </div>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    );
}

export default ExpenseItem;
