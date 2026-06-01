"use client";

import React, { useState } from "react";

export default function FormMuscelMemory() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSumit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    console.log("VAILD: ", name);
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>Name: {name}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
