import styled from "styled-components";

const Card = styled.div``;

const Button = styled.button``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  //삭제, 추가 로직 완성해서 onClick에 연결하기

  return (
    <Card>
      <img src={pokemon.img_url} alt={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      {isSelected === true ? (
        <Button
          onClick={() => {
            onRemove();
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
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
