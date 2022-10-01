import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

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
            >
                {filteredExpenses.map((data) => (
                    <ExpenseItem
                        key={data.id}
                        date={data.date}
                        title={data.title}
                        location={data.location}
                        amount={data.amount}
                    ></ExpenseItem>
                ))}
            </ExpensesFilter>
            {filteredExpenses.map((data) => (
                <ExpenseItem
                    key={data.id}
                    date={data.date}
                    title={data.title}
                    location={data.location}
                    amount={data.amount}
                ></ExpenseItem>
            ))}
        </Card>
    );
};

export default Expenses;
