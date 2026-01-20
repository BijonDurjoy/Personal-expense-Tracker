import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";
const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div>
        <h2>Expenses</h2>
        <p>No expenses found.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Expenses</h2>
      <h4>Total items: {expenses.length}</h4>

      {expenses.map((expense) => {
        <ExpenseItem key={expense.id} expense={expense} />;
      })}

      {/* Later we will map expenses here */}
      {/* <ExpenseItem /> */}
    </div>
  );
};

export default ExpenseList;
