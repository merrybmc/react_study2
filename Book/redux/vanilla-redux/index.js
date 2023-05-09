import { createStore } from "redux";

// 스토어 만들기, redux의 createStore 함수 불러오기. 파라미터에는 reducer가 들어가야 한다.
const store = createStore(reducer);

// store 라이브러리 대신 DOM
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 = 프로젝트의 상태에 변화를 일으키는 것
// 액션의 이름은 주로 대문자, 문자열 형태로 고유한 값 작성
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 객체 생성 함수
// 액션 객체는 type 값을 반드시 가지고 있어야 한다.
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ DECREASE });

// 초기값 설정
const initialState = {
  toggle: false, // Done
  counter: 0,
};

// 변화를 일으키는 함수, 파라미터는 state와 action 값을 받아온다.
// state에 초기값을 설정해주는 이유 = 맨 처음 호출될 때는 state의 값이 undefined이기 때문
// reducer에서는 불변성을 유지하면서 데이터에 변화를 주어야하기 때문에 spread 연산자를 매우 잘 활용하자
// 리덕스로는 함수의 구조를 최대한 깊지않게 진행하는것이 좋다.
function reducer(state = initialState, action) {
  switch (
    action.type // type에 따라 작업을 처리함 ( type = 함수 이름 )
  ) {
    case TOGGLE_SWITCH: // type이 TOGGLE_SWITCH 일 때
      return {
        ...state, // state에
        toggle: !state.toggle, // toggle의 상태를 반대로 반환
      };
    case INCREASE: // type이 INCREASE일 때
      return {
        ...state, // state에
        counter: state.counter + action.difference, // state의 counter 값에 + action.difference의 값을 반환
      };
    case DECREASE: // type이 DECREASE일 때
      return {
        ...state, // state에
        counter: state.counter - 1, // state의 count 값 -1을 반환
      };
    default:
      return state; // 그 외 state 반환
  }
}

// render 함수
const render = () => {
  const state = store.getState(); // 현재 상태를 불러옵니다.
  // 토글 처리
  if (state.toggle) {
    // toggle이 true일 때
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
  store.dispacth(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispacth(increase(1));
};

btnDecrease.onclick = () => {
  store.dispacth(decrease());
};
