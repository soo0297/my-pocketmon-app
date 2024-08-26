import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  border: 1px none;
  border-radius: 5px;
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const navigate = useNavigate();

  const pokemonId = pokemon.id;
  return (
    <Card>
      <div
        // navigate 소괄호 안에 리터럴스플릿 써야 id값을 불러올 수 있음.
        onClick={() => {
          navigate(`/detail?id=${pokemonId}`);
        }}
      >
        <img src={pokemon.img_url} alt={pokemon.img_url} />
        <p>{pokemon.korean_name}</p>
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
            // ⭐️ onAdd(pokemon) 해도 똑같이 실행됨..? 도대체 왜???!
            onAdd();
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
