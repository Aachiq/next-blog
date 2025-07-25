import { IPost } from "@/app/blog/blog.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPostListProps {
  postItem: IPost;
  handleFavorite: (post: IPost) => void;
}
export default function PostList({ postItem, handleFavorite }: IPostListProps) {
  return (
    <div
      key={postItem.id}
      style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
    >
      <Link href={`/blog/post/${postItem.id}`}>
        <h3>{postItem.title}</h3>
        <p>{postItem.content}</p>
        <Image
          alt="post_img"
          width={150}
          height={150}
          src={`/images/posts/post1.png`}
        />
      </Link>
      <div>
        <button onClick={() => handleFavorite(postItem)}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
}
