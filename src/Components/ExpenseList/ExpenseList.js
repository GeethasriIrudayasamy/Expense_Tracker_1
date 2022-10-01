import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    let expenseList = props.item.map((data) => (
        <ExpenseItem
            key={data.id}
            date={data.date}
            title={data.title}
            location={data.location}
            amount={data.amount}
        ></ExpenseItem>
    ));

    if (props.item.length === 0) {
        return <h3 id="expense_list__fallback">No Expense found</h3>;
    }
    if (props.item.length === 1) {
        return (
            <div>
                {expenseList}
                <h3 id="expense_list__fallback">
                    Only single Expense here. Please add more...
                </h3>
            </div>
        );
    }

    return <ul className="expense_list">{expenseList}</ul>;
};

export default ExpenseList;
