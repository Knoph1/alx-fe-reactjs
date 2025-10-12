import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("input");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.submit(form);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByTestId("delete-btn")[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
