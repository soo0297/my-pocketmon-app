import { useSelector } from "react-redux";
import Router from "./shared/Router";

const App = () => {
  const selectReducer = useSelector((state) => {
    return state.select;
  });
  return <Router />;
};

export default App;
