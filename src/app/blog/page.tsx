"use client";

import { addFavorite, Post } from "@/redux/favoriteSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

const dummyPosts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post.",
    image: "post1.png",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
    image: "post2.png",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the third post.",
    image: "post3.png",
  },
];

export default function BlogPage() {
  const [posts] = useState<Post[]>(dummyPosts);
  const dispatch = useDispatch();

  const handleFavorite = (post: Post) => {
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
          <Image
            alt="post_img"
            width={150}
            height={150}
            src={`/images/posts/${post.image}`}
          />
          <button onClick={() => handleFavorite(post)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
}
