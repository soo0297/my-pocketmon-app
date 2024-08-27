import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAdd, onRemove } from "../redux/modules/pokemon";

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
  const pokemons = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  // const { onAdd, onRemove } = useContext(PokemonContext);
  const navigate = useNavigate();
  const pokemonId = pokemon.id;

  const handleOnAdd = () => {
    if (pokemons.length >= 6) {
      alert("최대 6개까지만 선택할 수 있습니다.");
      return;
    }
    if (pokemons.find((el) => el.id === pokemon.id)) {
      alert("이미 등록된 포켓몬 입니다");
      return;
    }
    dispatch(onAdd(pokemon));
  };

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
            dispatch(onRemove(pokemon));
          }}
        >
          삭제
        </RemoveButton>
      ) : (
        <AddButton
          onClick={() => {
            handleOnAdd();
          }}
        >
          추가
        </AddButton>
      )}
    </Card>
  );
}

export default PokemonCard;
