import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Projects", completed: true },
    { id: 3, text: "Practice Daily", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid="todo-item"
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer py-2 flex justify-between ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
            <button
              data-testid="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              className="text-red-600 hover:text-red-800"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
