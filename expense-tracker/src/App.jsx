import { useState } from "react";
import ExpenseForm from "./components/ExpenseFrom.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker App</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <Filter />

      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
