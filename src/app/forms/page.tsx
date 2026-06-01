"use client";

import React, { useState } from "react";

export default function FormMuscelMemory() {
  //2nd time
  const [name, setName] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Submited String: ", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
