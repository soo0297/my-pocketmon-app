import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/Context";

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: 1px none;
  border-radius: 5px;
  width: 50%;
`;

function PokemonCard({ pokemon, isSelected }) {
  const { onAdd, onRemove } = useContext(PokemonContext);
  const navigate = useNavigate();
  const pokemonId = pokemon.id;

  return (
    <Card>
      <div
        // navigate 소괄호 안에 템플릿리터럴(``) 써야 id값을 불러올 수 있음.
        onClick={() => {
          navigate(`/detail?id=${pokemonId}`);
        }}
      >
        <img src={pokemon.img_url} alt={pokemon.img_url} />
        <p style={{ textAlign: "center" }}>{pokemon.korean_name}</p>
      </div>
      {isSelected === true ? (
        <Button
          onClick={() => {
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
