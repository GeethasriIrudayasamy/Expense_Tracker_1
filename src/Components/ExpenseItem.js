import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2022, 8, 12);
    const expenseTitle = "Birthday Cake";
    const expenseAmount = "Rs.1209";
    const LocationOfExpenditure = "Bakery";
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__description">
                <h2>{LocationOfExpenditure}</h2>
            </div>
            <div className="expense-item__price">{expenseAmount}</div>
        </div>
    );
}

export default ExpenseItem;
