"use client";

import axios from "axios";
import { useEffect, useState } from "react";

//clean up function

export default function HomeHooks() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFact = async () => {
      try {
        const res = await axios.get("https://catfact.ninja/fact");
        setFact(res.data.fact);
      } catch {
        setError("Error in loading fact");
      } finally {
        setLoading(false);
      }
    };

    loadFact();
  }, []);

  if (loading) <p>Loading....</p>;
  if (error) <p>{error}</p>;

  return <p>fact: {fact}</p>;
}
