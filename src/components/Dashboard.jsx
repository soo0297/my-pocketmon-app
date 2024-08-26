import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/Context";

const DashboardContainer = styled.div``;

const Dashboard = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  // 대시보드에 포켓몬 카드를 삭제하는 기능
  const onRemove = (pokemon) => {
    const removePokemon = selectedPokemon.filter((data) => {
      return data.id !== pokemon.id;
    });
    setSelectedPokemon(removePokemon);
  };

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <div style={{ display: "flex" }}>
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
