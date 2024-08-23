import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const onAdd = (pokemon) => {
    setSelectedPokemon([...selectedPokemon, pokemon]);
    console.log(selectedPokemon);
  };
  // const onRemove = () => {};

  // const addPokemon = (pokemon) => {};

  // const removePokemon = (pokemon = {});
  //selectedPokemon 배열에 setSelectedPokemon으로 포켓몬들 추가하고 삭제하는 방식으로 구현하기
  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        // onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAdd={onAdd} />
    </div>
  );
}

export default Dex;
