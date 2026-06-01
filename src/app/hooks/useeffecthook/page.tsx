"use client";

import { useEffect, useState } from "react";

//runs when counts change

export default function HomeHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Rendere, count: ${count} `);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
