import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  // Load expenses safely from localStorage
  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
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
    <div>
      <h1>Personal Expense Tracker</h1>

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
