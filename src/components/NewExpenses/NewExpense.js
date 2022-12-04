import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const addedData = (expenseData) => {
    props.onSaveDataHandler(expenseData);
  };

  const [isEditing, setEditing] = useState(false);

  const isEditingHandler = () => {
    setEditing(true);
  };

  const cancelEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="grid">
      {!isEditing && (
        <button
          onClick={isEditingHandler}
          className="rounded-full text-blue-500 font-bold grid place-items-center justify-self-end bg-neutral-800 w-14 h-14 shadow-[0px_10px_36px_-4px_rgba(0,0,0,0.25)]"
        >
          +
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          stopEditing={cancelEditingHandler}
          onAddDataHandler={addedData}
        />
      )}
    </div>
  );
};

export default NewExpense;
