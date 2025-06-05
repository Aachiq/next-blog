import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesReducer from "./favoriteSlice";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  favoriteSlice: favoritesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteSlice"], // ["favoriteSlice", "authSlice"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
