"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [inputValue, setInputValue] = useState("");

  const completedTodosCount: number = todos.filter(
    (todo) => todo.completed,
  ).length;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleAddTodo() {
    if (inputValue.trim() === "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  }

  function handleToggleTodo(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleDeleteTodo(id: number) {
    setTodos((allTodos) => allTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>My Todo App</h1>
      <h2>Total Todos: {todos.length}</h2>
      <h2>Completed Todos: {completedTodosCount}</h2>

      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAdd={handleAddTodo}
      />

      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
