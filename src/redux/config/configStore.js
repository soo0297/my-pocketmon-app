import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";

const store = configureStore({
  reducer: { pokemon: pokemonSlice },
});

export default store;
