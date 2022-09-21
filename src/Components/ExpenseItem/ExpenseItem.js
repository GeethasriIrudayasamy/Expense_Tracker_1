import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseDetails from "../ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} />
        </div>
    );
};

export default ExpenseItem;
