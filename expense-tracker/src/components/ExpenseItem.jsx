import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <div>
      <p>Amount :{expense.amount}</p>
      <p>Description: {expense.description}</p>
      <p>Category: {expense.category}</p>
      <p>Date: {expense.date}</p>
      <button>Delete</button>
    </div>
  );
};

export default ExpenseItem;
