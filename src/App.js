import React, { useState } from "react";
import Expenses from "./Components/ExpenseDetails/Expenses";
import "./Components/ExpenseDetails/expenses.css";
import NewExpense from "./Components/ExpenseForm/NewExpense";

const initialValue = [
    {
        id: 1,
        title: "Refridgerator",
        amount: 16300,
        date: new Date(12, 10, 2000),
    },
];
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
