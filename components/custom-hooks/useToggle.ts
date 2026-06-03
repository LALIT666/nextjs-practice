import { useState } from "react";

export function useToggle() {
  const [value, setValue] = useState(false);
  const toggle = () => setValue((prevValue) => !prevValue);

  return { value, toggle };
}
