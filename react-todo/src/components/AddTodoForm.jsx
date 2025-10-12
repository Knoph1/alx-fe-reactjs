import React, { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        placeholder="Add a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="todo-input"
        className="border rounded px-3 py-1 flex-grow"
      />
      <button
        type="submit"
        data-testid="add-button"
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
