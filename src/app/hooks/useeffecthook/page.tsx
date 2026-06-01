"use client";

import { useEffect, useState } from "react";

//runs on every render

export default function HomeHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Rendere, count: ${count} `);
  });

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
