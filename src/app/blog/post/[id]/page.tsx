"use client";

import { useState, useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import { getOnePostService } from "@/services/post.service";
import Image from "next/image";

export default function PostDetails() {
  const { id } = useParams();
  const [foundPost, setFoundPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Fetch post data when the component mounts or the ID changes
  useEffect(() => {
    if (!id) return;
    console.log("Post ID:", id);

    async function fetchPostById() {
      try {
        const foundPost = await getOnePostService({ id: Number(id) });
        console.log("foundPost:", foundPost);
        if (!foundPost) {
          setError(true);
          return notFound();
        }
        setFoundPost(foundPost);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(true);
      }
    }

    fetchPostById();
  }, [id]);

  // Show loading state while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error if post not found or failed to fetch
  if (error) {
    return <div>Error Fetching Post By Id</div>;
  }

  // If post is found, render its content
  return (
    <div>
      {foundPost ? (
        <>
          <h1>{foundPost.title}</h1>
          <Image
            alt="post_img"
            width={150}
            height={150}
            src={`/images/posts/post1.png`}
          />
          <p>{foundPost.description}</p>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: foundPost.content || "" }} // Ensure valid content
          />
          <p>
            <strong>Category:</strong> {foundPost.id_category.name}
          </p>{" "}
          {/* Display category */}
        </>
      ) : (
        <div>No post found!</div>
      )}
    </div>
  );
}
