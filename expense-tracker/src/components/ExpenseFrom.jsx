import React from "react";

const ExpenseFrom = () => {
  return (
    <div>
      <h2>Add new Expense</h2>
      <form action="">
        <input type="number" placeholder="Amount" required />
        <input type="text" placeholder="Description" required />

        <select>
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="others">Others</option>
        </select>
        <input type="date" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseFrom;
