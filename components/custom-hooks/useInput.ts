import { ChangeEvent, useState } from "react";

export function useInput(initial = "") {
  const [value, setValue] = useState(initial);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(initial);

  return { value, onChange, reset, setValue };
}
