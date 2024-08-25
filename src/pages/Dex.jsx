import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // 대시보드에 포켓몬 카드를 추가하는 기능
  const onAdd = (pokemon) => {
    if (selectedPokemon.length >= 6) return alert("6개를 선택하셨습니다.");
    if (selectedPokemon.find((el) => el.id === pokemon.id)) {
      return alert("이미 등록된 포켓몬 입니다");
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  // 대시보드에 포켓몬 카드를 삭제하는 기능
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
