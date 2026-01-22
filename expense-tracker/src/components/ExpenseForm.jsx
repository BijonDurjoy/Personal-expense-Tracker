import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!amount || Number(amount) <= 0) {
      newErrors.amount = "Amount must be a positive number";
    }

    if (!description || description.trim().length < 4) {
      newErrors.description = "Description must be at least 4 characters";
    }

    if (!category) {
      newErrors.category = "Please select a category";
    }

    if (!date) {
      newErrors.date = "Date is required";
    } else if (date > today) {
      newErrors.date = "Date cannot be in the future";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const expenseData = {
      id: Date.now().toString(),
      amount: Number(amount),
      description,
      category,
      date,
    };

    onAddExpense(expenseData);

    setAmount("");
    setDescription("");
    setCategory("");
    setDate("");

    console.log("Valid Expense:", expenseData);
  };

  return (
    <div>
      <h2>Add New Expense</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
          )}
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
          {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}
        </div>

        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
