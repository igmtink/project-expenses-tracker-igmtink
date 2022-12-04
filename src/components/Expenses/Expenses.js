import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <ul className="grid gap-3">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={Math.random()}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          time={expense.time}
        />
      ))}
    </ul>
  );
};

export default Expenses;
