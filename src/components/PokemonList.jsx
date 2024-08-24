import styled from "styled-components";
import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const PokemonList = ({ onAdd }) => {
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
