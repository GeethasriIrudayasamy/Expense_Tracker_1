import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.item.map((data) => (
                <ExpenseItem
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
