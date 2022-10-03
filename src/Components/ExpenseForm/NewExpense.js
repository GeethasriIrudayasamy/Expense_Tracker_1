import React, { useState } from "react";
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

    const [onEntering, setOnEntering] = useState(false);

    const enterValueHandler = () => {
        setOnEntering(true);
    };
    const cancelEnteringValue = () => {
        setOnEntering(false);
    };

    return (
        <div className="new-expense">
            {!onEntering && (
                <button onClick={enterValueHandler}>Add New Expense</button>
            )}
            {onEntering && (
                <ExpenseForm
                    onSaveExpenses={saveExpxenseHAndler}
                    onCancel={cancelEnteringValue}
                />
            )}
        </div>
    );
};

export default NewExpense;
