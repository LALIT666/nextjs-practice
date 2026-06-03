"use client";

import { useEffect, useState } from "react";

export default function HomeHooks() {
  const [name, setName] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("name") ?? "";
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
