import { useCallback, useState } from "react";

export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const inc = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const dec = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);
  const reset = useCallback(() => {
    setCount(initialCount);
  }, [initialCount]);

  return { count, inc, dec, reset };
}
