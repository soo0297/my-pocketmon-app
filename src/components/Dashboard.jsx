import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  border: 7px solid #ffcc00;
  border-radius: 10px;
`;

const SelectedContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`;

const SelectedCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Dashboard = () => {
  const pokemons = useSelector((state) => state.pokemon);

  return (
    <DashboardContainer>
      <h1>나만의 포켓몬</h1>
      <SelectedContainer>
        {pokemons.length === 0 ? (
          <p>선택된 포켓몬이 없습니다.</p>
        ) : (
          <SelectedCards>
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isSelected={true}
              />
            ))}
          </SelectedCards>
        )}
      </SelectedContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
