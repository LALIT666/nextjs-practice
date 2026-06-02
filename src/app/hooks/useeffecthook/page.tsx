"use client";

import axios from "axios";
import { useEffect, useState } from "react";

//clean up function

export default function HomeHooks() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadTitle = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/2",
      );

      setTitle(res.data.title);
    };

    loadTitle();
  }, []);

  return <h1>Title: {title}</h1>;
}
