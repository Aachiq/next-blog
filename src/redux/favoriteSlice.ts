import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  title: string;
  content: string;
  image?: string;
  description?: string;
}

interface FavoritesState {
  favorites: Post[];
}

// create state
const initialState: FavoritesState = {
  favorites: [],
};

export interface AppState {
  // here add slices with thier types, it's same as RootState of redux does.
  favoriteSlice: FavoritesState;
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Post>) => {
      const exists = state.favorites.find(
        (post) => post.id === action.payload.id
      );
      if (!exists) state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
