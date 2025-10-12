import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial demo todos", () => {
    render(<TodoList />);
    // initial items from initialTodos in component
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Projects")).toBeInTheDocument();
    expect(screen.getByText("Practice Daily")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addBtn);

    // New todo should now be in the document
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo completion by clicking on it", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    // initial should not be line-through
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    // After clicking, it should have line-through style
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo when delete button clicked", () => {
    render(<TodoList />);
    // Find delete buttons
    const deleteButtons = screen.getAllByTestId("delete-btn");
    // Click first delete button (should remove "Learn React")
    fireEvent.click(deleteButtons[0]);

    // "Learn React" should no longer be present
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
