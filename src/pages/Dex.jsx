import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {};

  const removePokemon = (pokemon = {});

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
