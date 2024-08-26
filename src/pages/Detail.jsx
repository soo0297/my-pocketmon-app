import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();

  const [queryParam] = useSearchParams();
  const pokemonId = queryParam.get("id");
  const pokemon = MOCK_DATA.find((p) => {
    return p.id === parseInt(pokemonId);
  });

  return (
    <PokemonDetail>
      <img src={pokemon.img_url} alt={pokemon.img_url} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <BackButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </BackButton>
    </PokemonDetail>
  );
};

export default Detail;

const PokemonDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 16px);
  > img {
    width: 250px;
    height: 250px;
  }
`;

const BackButton = styled.button`
  background-color: #333333;
  color: white;
  border: 1px none;
  border-radius: 5px;
  width: 25%;
  height: 30px;
  &:hover {
    background-color: #000000;
    transition: 0.7s;
  }
`;
