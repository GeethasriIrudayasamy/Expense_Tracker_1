import Expenses from "./Components/ExpenseDetails/Expenses";
import "./Components/ExpenseDetails/expenses.css";
import NewExpense from "./Components/ExpenseForm/NewExpense";

const App = () => {
    return (
        <div>
            <NewExpense />
            <Expenses></Expenses>
        </div>
    );
};

export default App;
