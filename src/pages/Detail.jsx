import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const Detail = () => {
  const navigate = useNavigate();

  const [queryParam] = useSearchParams();
  const pokemonId = queryParam.get("id");
  const pokemon = MOCK_DATA.find((p) => {
    return p.id === parseInt(pokemonId);
  });

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.img_url} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Detail;
