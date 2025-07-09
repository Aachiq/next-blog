"use client";

import { addFavorite, Post } from "@/redux/favoriteSlice";
import { getCategoriesService } from "@/services/category.service";
import {
  getOnePostsByCategoryService,
  getPostService,
} from "@/services/post.service";
import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ICategory, IPost } from "./blog.types";
import CategoriesList from "@/components/blog/category/CategoriesList";
import PostList from "@/components/blog/post/PostList";
export default function BlogPage() {
  const [postData, setPostsList] = useState<IPost[]>([]);
  const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);

  const dispatch = useDispatch();

  const handleFavorite = (post: Post) => {
    dispatch(addFavorite(post));
  };

  useLayoutEffect(() => {
    // fetch posts
    async function fetchPostsData() {
      const postsResult = await getPostService();
      setPostsList(postsResult);
    }
    async function fetchCategoriesData() {
      const categoriesResult = await getCategoriesService();
      setCategoriesList(categoriesResult);
    }

    fetchPostsData();
    fetchCategoriesData();
  }, []);

  // filter by category
  const filterPostsByCategory = async (idCatgeory: number) => {
    // call service
    const resultPostsByCategory = await getOnePostsByCategoryService({
      id_category: idCatgeory,
    });
    setPostsList(resultPostsByCategory);
  };

  return (
    <div>
      {categoriesList.map((categ) => (
        <CategoriesList
          category={categ}
          filterPostsByCategory={filterPostsByCategory}
        />
      ))}

      {postData.map((post) => (
        <PostList postItem={post} handleFavorite={handleFavorite} />
      ))}
    </div>
  );
}
