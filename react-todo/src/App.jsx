import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Todo App — React + Tests</h1>
      <TodoList />
    </div>
  );
}
