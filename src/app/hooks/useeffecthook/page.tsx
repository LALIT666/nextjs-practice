"use client";

import { useEffect, useState } from "react";

//clean up function

export default function HomeHooks() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Timer this : {time}</h1>;
}
