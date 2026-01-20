import React from "react";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpenseList = ({ expenses }) => {
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0,
  );

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
      <h3>Total spent: {totalAmount}</h3>

      {expenses.map((expense) => {
        <ExpenseItem key={expense.id} expense={expense} />;
      })}

      {/* Later we will map expenses here */}
      {/* <ExpenseItem /> */}
    </div>
  );
};

export default ExpenseList;
