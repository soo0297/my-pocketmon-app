import { useNavigate } from "react-router-dom";

function Home() {
  const homeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const goInButton = {
    backgroundColor: "red",
    color: "white",
    border: "1px none",
    borderRadius: "5px",
    padding: "10px 15px",
    fontSize: "20px",
    cursor: "pointer",
  };

  const navigate = useNavigate();

  return (
    <div style={homeStyle}>
      <h1>포켓몬 도감</h1>
      <button style={goInButton} onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </button>
    </div>
  );
}

export default Home;
