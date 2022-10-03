import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.item.filter((data) => {
        return data.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList item={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
