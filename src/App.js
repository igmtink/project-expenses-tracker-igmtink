// import logo from "./logo.svg";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";
import ExpensesChart from "./components/Expenses/ExpensesChart";

function App() {
  const [expensesData, setExpensesData] = useState([]);

  const savedData = (expenseData) => {
    setExpensesData((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  const usdCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const sumExpenses = expensesData.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <main className="w-[640px] max-w-full mx-auto p-6 grid gap-4 relative">
      <div className="w-[640px] max-w-full mx-auto px-6 pt-6 pb-2 grid gap-8 fixed top-0 left-0 right-0 bg-black">
        <ExpensesChart expenses={expensesData} />

        <div className="flex justify-between">
          <span className="text-blue-500">Total Expenses:</span>
          <span className="text-blue-500">
            {usdCurrency.format(sumExpenses)}
          </span>
        </div>
      </div>

      <div className="pt-[280px] pb-[180px]">
        <Expenses expenses={expensesData} />
      </div>

      <div className="w-[640px] max-w-full mx-auto p-6 fixed bottom-0 left-0 right-0">
        <NewExpense onSaveDataHandler={savedData} />
      </div>
    </main>
  );
}

export default App;
