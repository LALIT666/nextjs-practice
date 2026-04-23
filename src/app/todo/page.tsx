"use client";

import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [inputValue, setInputValue] = useState("");

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

      <input
        type="text"
        placeholder="Add your to do"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Input: {inputValue}</p>
      <p>Total Todos: {todos.length}</p>
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ color: todo.completed ? "green" : "red" }}>
              Todo: {todo.text}
            </span>
            , Status: {todo.completed ? "Completed" : "Not Completed"}
            <button onClick={() => handleToggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
