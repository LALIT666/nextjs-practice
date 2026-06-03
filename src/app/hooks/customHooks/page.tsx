"use client";

import { useToggle } from "../../../../components/custom-hooks/useToggle";

export default function HomeCustomHooks() {
  const { value, toggle } = useToggle();
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-3">
      <h1>Custom Hooks</h1>

      <button onClick={toggle}>{value ? "ON" : "OFF"}</button>
    </div>
  );
}
