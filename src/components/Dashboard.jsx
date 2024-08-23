import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div``;

const Dashboard = ({ selectedPokemon, onRemove }) => {
  //selectedPokemon와 setSelectedPokemon를 props로 내려받아서 selectedPokemon을 보여주고 삭제할 수 있는 버튼과 로직 만들기
  selectedPokemon.map((pokemon) => {
    console.log(pokemon);
  });
  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <div>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={() => {
                onRemove(pokemon);
              }}
              isSelected={true}
            />
          ))}
        </div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
