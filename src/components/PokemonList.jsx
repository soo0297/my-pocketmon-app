import styled from "styled-components";
import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";

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
        <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={false} />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
