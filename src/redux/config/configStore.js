import { createStore } from "redux";
import { combineReducers } from "redux";
import pokemon from "../modules/pokemon";

// 1) rootReducer 만들기
const rootReducer = combineReducers({ pokemon });

// 2) store 조합
const store = createStore(rootReducer);

// 3) 만든 store 내보내기
export default store;
