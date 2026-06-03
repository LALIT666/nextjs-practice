import { useState } from "react";

export function useSomething() {
  const [value, setValue] = useState(false);

  return { value, setValue };
}
