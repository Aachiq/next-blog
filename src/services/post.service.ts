import { IPost } from "@/app/blog/blog.types";
import { API_URL } from "@/config/constants";

export interface ICreatePostPayload {
  title: string;
  description: string;
  content: string;
  category: number;
}

export interface IParamGetOnePostPayload {
  id: number;
}
export interface IParamGetPostsByCategoryPayload {
  id_category: number;
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

export const getOnePostsByCategoryService = async ({
  id_category,
}: IParamGetPostsByCategoryPayload) => {
  const response = await fetch(`${API_URL}/posts/category/${id_category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts by categoryId ${id_category}`);
  }

  return response.json();
};

export const getOnePostService = async ({ id }: IParamGetOnePostPayload) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch post details");
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
