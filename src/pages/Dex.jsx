import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { PokemonContext } from "../context/Context";
import styled from "styled-components";
import { onAdd, onRemove } from "../redux/modules/pokemon";

const AllDex = styled.div`
  background-color: #fff8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <AllDex>
      <PokemonContext.Provider
        value={{
          selectedPokemon,
          setSelectedPokemon,
          onAdd,
          onRemove,
        }}
      >
        <Dashboard />
        <PokemonList pokemonList={MOCK_DATA} />
      </PokemonContext.Provider>
    </AllDex>
  );
}
export default Dex;
