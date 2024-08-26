import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/Context";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffcc00;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    border: 2px solid #333333;
  }
`;

const AddButton = styled.button`
  background-color: #33cc33;
  color: white;
  border: 1px none;
  border-radius: 5px;
  width: 50%;
`;

const RemoveButton = styled.button`
  background-color: #ff6666;
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
        <RemoveButton
          onClick={() => {
            onRemove(pokemon);
          }}
        >
          삭제
        </RemoveButton>
      ) : (
        <AddButton
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </AddButton>
      )}
    </Card>
  );
}

export default PokemonCard;
