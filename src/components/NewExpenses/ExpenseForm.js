import Card from "../UI/Card";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      key: Math.random(),
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(),
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    props.onAddDataHandler(expenseData);

    setTitle("");
    setAmount("");
  };

  return (
    <Card className="p-3 bg-neutral-800 shadow-[0px_10px_36px_-4px_rgba(0,0,0,0.25)]">
      <form onSubmit={submitHandler} className="grid gap-4">
        <div className="grid gap-2">
          <input
            className="w-full bg-neutral-700 p-2 rounded-md text-center text-white"
            type="text"
            placeholder="Title"
            value={enteredTitle}
            onChange={titleHandler}
            required
          />
          <input
            className="w-full bg-neutral-700 p-2 rounded-md text-center text-white"
            type="number"
            placeholder="Amount"
            value={enteredAmount}
            onChange={amountHandler}
            required
          />
        </div>
        <div className="flex gap-2 flex-1">
          <button className="w-full bg-blue-500 py-2 px-3 rounded-md">
            Add Expense
          </button>
          <button
            onClick={props.stopEditing}
            className="w-full bg-red-500 py-2 px-3 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
