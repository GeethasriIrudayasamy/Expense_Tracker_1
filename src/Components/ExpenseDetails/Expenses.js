import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = () => {
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
        {
            date: new Date(2021, 11, 30),
            title: "Gift",
            location: "SK showrooms",
            amount: "RS.650",
        },
    ];
    return (
        <Card className="expenses">
            {expenses.map((data) => (
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
