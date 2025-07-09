import { ICategory } from "@/app/blog/blog.types";
import React from "react";

interface ICategoriesListProps {
  category: ICategory;
  filterPostsByCategory: (idCatgeory: number) => any;
}
export default function CategoriesList({
  category,
  filterPostsByCategory,
}: ICategoriesListProps) {
  return (
    <div
      key={category.id}
      style={{
        border: "1px solid #ccc",
        padding: 5,
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => filterPostsByCategory(category.id)}
    >
      <h3>{category.name}</h3>
    </div>
  );
}
