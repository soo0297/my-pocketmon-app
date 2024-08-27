import styled from "styled-components";
import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";
import { onAdd } from "../redux/modules/pokemon";

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 15px;
`;

const PokemonList = () => {
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
