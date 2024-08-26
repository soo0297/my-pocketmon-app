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
  const { onAdd } = useContext(PokemonContext);

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
