// 액션 생성 함수
const INCREASE_NUMBER = "INCREASE_NUMBER";
const DECREASE_NUMBER = "DECREASE_NUMBER";

// 액션 함수
export const numberUp = (payload) => {
  return {
    type: INCREASE_NUMBER,
    payload,
  };
};

export const decreaseNumber = (payload) => {
  return {
    type: DECREASE_NUMBER,
    payload,
  };
};

// 초기화
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case DECREASE_NUMBER:
      return {
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

export default counter;
