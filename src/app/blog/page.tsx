"use client";

import { addFavorite } from "@/redux/favoriteSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const dummyPosts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." },
];

export default function BlogPage() {
  const [posts] = useState(dummyPosts);
  const dispatch = useDispatch();

  const handleFavorite = (post: any) => {
    dispatch(addFavorite(post));
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleFavorite(post)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}
