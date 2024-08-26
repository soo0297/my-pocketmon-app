import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const Home = styled.div`
    text-align: center;
    width: 300px;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -75px;
    margin-left: -150px;
  `;

  const GoInButton = styled.button`
    background-color: #ff6666;
    color: white;
    border: 1px none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: #333333;
      transition: 0.2s;
    }
  `;

  const navigate = useNavigate();

  return (
    <Home>
      <h1>포켓몬 도감</h1>
      <GoInButton onClick={() => navigate("/dex")}>시작하기</GoInButton>
    </Home>
  );
}

export default Home;
