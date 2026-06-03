"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};

export default function HomeHooks() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const id = setTimeout(async () => {
      if (!search.trim()) {
        setResult([]);
        setError("");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`,
        );

        if (!ignore) {
          setResult(res.data.products);
        }
      } catch {
        if (!ignore) {
          setError("Failed to fetch products");
          setResult([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      ignore = true;
      clearTimeout(id);
    };
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {result.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
