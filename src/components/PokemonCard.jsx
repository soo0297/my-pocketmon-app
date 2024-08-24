import styled from "styled-components";
const Card = styled.div``;
const Button = styled.button`
  background-color: red;
  color: white;
  border: 1px none;
  border-radius: 5px;
`;
function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <Card>
      <img src={pokemon.img_url} alt={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
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
