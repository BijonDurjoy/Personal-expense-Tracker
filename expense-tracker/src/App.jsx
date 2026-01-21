import { useState } from "react";
import ExpenseForm from "./components/ExpenseFrom.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory =
      selectedCategory === "" || expense.category === selectedCategory;

    const matchesSearch = expense.description
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-container">
      <h1>Expense Tracker App</h1>

      <ExpenseForm onAddExpense={addExpense} />

      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;
