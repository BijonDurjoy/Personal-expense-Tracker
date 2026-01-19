import React from "react";

const Filter = () => {
  return (
    <div>
      <h3>Filter Expenses</h3>

      <select>
        <option value="">All Categories</option>
        <option value="food">Food</option>
        <option value="transportation">Transportation</option>
        <option value="entertainment">Entertainment</option>
        <option value="shopping">Shopping</option>
        <option value="bills">Bills</option>
        <option value="others">Others</option>
      </select>

      <input type="text" placeholder="Search by description" />
    </div>
  );
};

export default Filter;
