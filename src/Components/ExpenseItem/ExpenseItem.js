import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
    const deleteHandler = () => {
        console.log("The item is deleted");
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} />
            <button onClick={deleteHandler}>Delete Expense</button>
        </Card>
    );
};

export default ExpenseItem;
