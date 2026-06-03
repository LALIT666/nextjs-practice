//🟢 DRILL 12: Final Boss — Axios + useEffect + Loading + Dependency
//

"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
};

export default function HomeHooks() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUserPost = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        );
        console.log(`res.data: ${res.data}`);

        setPosts(res.data);

        console.log(
          `{this is in useeffect after setpost(res.data):  ${posts}}`,
        );
      } catch {
        setError("Erron in loading user's post");
      } finally {
        setLoading(false);
      }
    };

    loadUserPost();
  }, [userId]);

  console.log({ posts });
  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {posts.map((post, index) => (
        <p key={post.id}>
          title no: {index + 1} -- {post.title}
        </p>
      ))}
    </div>
  );
}
