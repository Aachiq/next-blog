import { API_URL } from "@/config/constants";

export interface ICreatePostPayload {
  title: string;
  description: string;
  content: string;
  category: number;
}

export const getPostService = async () => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const cretaePostService = async (data: ICreatePostPayload) => {
  const response = await fetch(`${API_URL}/post/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json();
};
