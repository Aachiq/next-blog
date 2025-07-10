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
      onClick={() => filterPostsByCategory(category.id)}
      style={{
        padding: 5,
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
    >
      <h3>{category.name}</h3>
    </div>
  );
}
