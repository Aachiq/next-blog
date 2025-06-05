"use client";

import { AppState, removeFavorite } from "@/redux/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FavoritesPage() {
  const favorites = useSelector(
    (state: AppState) => state.favoriteSlice.favorites
  );
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      {favorites &&
        favorites.map((post) => (
          <div
            key={post.id}
            style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleRemove(post.id)}>Remove</button>
          </div>
        ))}
    </div>
  );
}
