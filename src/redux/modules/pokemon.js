// action value
const ON_ADD = "ON_ADD";
const ON_REMOVE = "ON_REMOVE";

// action creator 만들어서 export(컴포넌트에서 사용할 수 있도록)
export const onAdd = (payload) => {
  return {
    type: ON_ADD,
    payload,
  };
};

export const onRemove = (payload) => {
  return {
    type: ON_REMOVE,
    payload,
  };
};

// 초기 상태값
const initialState = [];

// 리듀서(:변화를 일으키는 함수) 만들기
const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case ON_ADD:
      return [...state, action.payload];
    case ON_REMOVE: {
      console.log("state", state);
      console.log("ac", action);
      const removePokemon = state.filter((data) => {
        return data.id !== action.payload.id;
      });
      return removePokemon;
    }
    default:
      return state;
  }
};

export default pokemon;
