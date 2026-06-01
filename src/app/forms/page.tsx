"use client";

import React, { useState } from "react";

export default function FormMuscelMemory() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 2000));

    console.log("Done name: ", name);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={loading}>
        {" "}
        {loading ? "Submitting...." : "Submit"}
      </button>
    </form>
  );
}
