import { ICategory } from "@/app/blog/blog.types";
import React from "react";

interface ICategoriesListProps {
  category: ICategory;
}
export default function CategoriesList({ category }: ICategoriesListProps) {
  return (
    <div
      key={category.id}
      style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
    >
      <h3>{category.name}</h3>
    </div>
  );
}
