"use client";

import { useCounter } from "../../../../components/custom-hooks/useCounter";
import { useToggle } from "../../../../components/custom-hooks/useToggle";

export default function HomeCustomHooks() {
  const { value, toggle } = useToggle();
  const { count, inc, dec, reset } = useCounter(5);
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-3">
      <h1>Custom Hooks</h1>

      <button onClick={toggle}>{value ? "ON" : "OFF"}</button>

      <h1>UseCounter</h1>
      <p>Count: {count}</p>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
