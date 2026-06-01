"use client";

import { useEffect } from "react";

export default function HomeHooks() {
  useEffect(() => {
    alert("COMPONENT MOUNTED ✅");
  }, []);

  return <h1>Hello UseEffect</h1>;
}
