import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { PokemonContext } from "../context/Context";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon: selectedPokemon,
        setSelectedPokemon: setSelectedPokemon,
      }}
    >
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </PokemonContext.Provider>
  );
}
export default Dex;
