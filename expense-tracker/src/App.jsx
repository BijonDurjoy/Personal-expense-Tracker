import ExpenseForm from "./components/ExpenseFrom.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  return (
    <div className="app-container">
      <h1>Expense Tracker App</h1>

      <ExpenseForm />

      <Filter />

      <ExpenseList />
    </div>
  );
}

export default App;
