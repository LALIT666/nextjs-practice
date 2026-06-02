"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeHooks() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        setUser(res.data);
      } catch {
        console.log("Error in loadUser");
      }
    };

    loadUser();
  }, [userId]);

  return (
    <div>
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
      <p>{user?.name}</p>
    </div>
  );
}
