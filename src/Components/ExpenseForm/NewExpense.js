import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpxenseHAndler = (eneteredExpenseData) => {
        const expenseData = {
            ...eneteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenses={saveExpxenseHAndler} />
        </div>
    );
};

export default NewExpense;
