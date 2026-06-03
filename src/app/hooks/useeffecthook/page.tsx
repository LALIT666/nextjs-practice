"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeHooks() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const fetchingQuote = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get("https://api.quotable.io/random");
        setQuote(res.data.content);
      } catch {
        setError("Error....");
      } finally {
        setLoading(false);
      }
    };
    fetchingQuote();

    const id = setInterval(() => {
      fetchingQuote();
    }, 5000);

    return () => clearInterval(id);
  }, []);

  console.log("quote", quote);

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <p>Quote: {quote}</p>
    </div>
  );
}
