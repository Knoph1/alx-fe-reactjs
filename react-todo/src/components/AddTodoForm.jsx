import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <input
        data-testid="todo-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo..."
      />
      <button data-testid="add-btn" type="submit">Add</button>
    </form>
  );
}
