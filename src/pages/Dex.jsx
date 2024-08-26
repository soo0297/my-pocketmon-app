import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { PokemonContext } from "../context/Context";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // 대시보드에 선택한 포켓몬카드를 추가하는 함수
  const onAdd = (pokemon) => {
    if (selectedPokemon.length >= 6)
      return alert("최대 6개까지만 선택할 수 있습니다.");
    // console.log(pokemon);
    if (selectedPokemon.find((el) => el.id === pokemon.id)) {
      return alert("이미 등록된 포켓몬 입니다");
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  // 대시보드에서 포켓몬카드를 삭제하는 함수
  const onRemove = (pokemon) => {
    const removePokemon = selectedPokemon.filter((data) => {
      return data.id !== pokemon.id;
    });
    setSelectedPokemon(removePokemon);
  };

  return (
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
  );
}
export default Dex;
