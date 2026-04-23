"use client";

import React from "react";

type TodoInputProps = {
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};
export default function TodoInput({
  inputValue,
  onChange,
  onAdd,
}: TodoInputProps) {
  function handlePress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onAdd();
    }
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={handlePress}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
