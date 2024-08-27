import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const AllDex = styled.div`
  background-color: #fff8e8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

function Dex() {
  return (
    <AllDex>
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </AllDex>
  );
}
export default Dex;
