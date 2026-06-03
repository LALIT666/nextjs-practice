// ! 🟢 DRILL 10: Window Resize Listener

"use client";

import { useEffect, useState } from "react";

export default function HomeHooks() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Width: {width}</p>;
}
