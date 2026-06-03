// 🟢 DRILL 11: Interval Start/Stop

"use client";

import { useEffect, useState } from "react";

export default function HomeHook() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 100);

    return () => clearInterval(id);
  }, [running]);

  return (
    <div>
      <p>Time: {time}</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "STOP" : "START"}
      </button>
    </div>
  );
}
