"use client";

import { useInput } from "../../../../components/custom-hooks/useInput";

export default function HomeCustomHooks() {
  const name = useInput();

  return (
    <div>
      <input type="text" value={name.value} onChange={name.onChange} />
      <button onClick={name.reset}>Reset</button>
      <p>{name.value}</p>
    </div>
  );
}
