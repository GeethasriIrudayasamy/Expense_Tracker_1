import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";

const App = () => {
    const expenses = [
        {
            date: new Date(2022, 8, 12),
            title: "Birthday",
            location: "Bakery",
            amount: "RS.1209",
        },
        {
            date: new Date(2020, 7, 14),
            title: "Television",
            location: "Satya Electronics",
            amount: "RS.35000",
        },
        {
            date: new Date(2021, 11, 30),
            title: "Refridgerator",
            location: "Satya Electronics",
            amount: "RS.17000",
        },
    ];
    return (
        <div>
            {expenses.map((data) => (
                <ExpenseItem
                    date={data.date}
                    title={data.title}
                    location={data.location}
                    amount={data.amount}
                ></ExpenseItem>
            ))}
        </div>
    );
};

export default App;
