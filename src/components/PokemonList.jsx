import styled from "styled-components";

const ListContainer = styled.div``;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={{}}
          onAdd={() => {}}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
