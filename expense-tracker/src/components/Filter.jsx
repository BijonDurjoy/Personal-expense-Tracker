import React from "react";

const Filter = ({
  selectedCategory,
  onCategoryChange,
  searchText,
  onSearchChange,
}) => {
  return (
    <div>
      <h3>Filter Expenses</h3>

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select>

      <input
        type="text"
        placeholder="Search by description"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
