// import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
    // const [expense, setExpense] = useState(props.amount);

    // const updateHandler = () => {
    //     setExpense("100$");

    //     console.log("expense amount changed to 100$");
    // };
    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <ExpenseDetails title={props.title} amount={props.amount} />
                {/* 
            <button className="update-button" onClick={updateHandler}>
                Update
            </button> */}
            </Card>
        </div>
    );
};

export default ExpenseItem;
