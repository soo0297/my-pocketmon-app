import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      return [...state, action.payload];
    },
    onRemove: (state, action) => {
      const removePokemon = state.filter((data) => {
        return data.id !== action.payload.id;
      });
      return removePokemon;
    },
  },
});

export const { onAdd, onRemove } = pokemonSlice.actions;
export default pokemonSlice.reducer;
