"use client";

import React, { useState } from "react";

interface InputObj {
  name: string;
  email: string;
}

export default function FormMuscelMemory() {
  //"2nd time" multiple inputs

  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="joe doe"
      />
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="joedoe@gmail.com"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
