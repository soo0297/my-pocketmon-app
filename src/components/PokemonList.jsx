import styled from "styled-components";
import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/Context";

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const PokemonList = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  // 대시보드에 포켓몬 카드를 추가하는 기능
  const onAdd = (pokemon) => {
    if (selectedPokemon.length >= 6)
      return alert("최대 6개까지만 선택할 수 있습니다.");
    // console.log(pokemon);
    if (selectedPokemon.find((el) => el.id === pokemon.id)) {
      return alert("이미 등록된 포켓몬 입니다");
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAdd}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
