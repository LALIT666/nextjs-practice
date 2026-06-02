"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeHooks() {
  const [post, setPost] = useState<any>(null);

  const [postId, setPostId] = useState(1);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );

        setPost(res.data);
      } catch (error) {
        console.error("Error in loading post", error);
      }
    };

    loadPost();
  }, [postId]);

  return (
    <div>
      <input
        type="number"
        value={postId}
        onChange={(e) => setPostId(Number(e.target.value))}
        placeholder="wrtie a number here like 1 or 2 "
      />

      <p>{post?.title}</p>
    </div>
  );
}
