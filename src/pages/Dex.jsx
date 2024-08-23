import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const onAdd = (pokemon) => {
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };
  const onRemove = (pokemon) => {
    const removePokemon = selectedPokemon.filter((data) => {
      return data.id !== pokemon.id;
    });
    setSelectedPokemon(removePokemon);
  };

  return (
    <div>
      <Dashboard selectedPokemon={selectedPokemon} onRemove={onRemove} />
      <PokemonList pokemonList={MOCK_DATA} onAdd={onAdd} />
    </div>
  );
}

export default Dex;
