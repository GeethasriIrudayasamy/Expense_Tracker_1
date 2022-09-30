import React, { useState } from "react";
import Expenses from "./Components/ExpenseDetails/Expenses";
import "./Components/ExpenseDetails/expenses.css";
import NewExpense from "./Components/ExpenseForm/NewExpense";

const initialValue = [];
const App = () => {
    const [expenses, setExpenses] = useState(initialValue);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpense) => {
            return [expense, ...prevExpense];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses}></Expenses>
        </div>
    );
};

export default App;
