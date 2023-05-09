import { configureStore, createSlice, current } from "@reduxjs/toolkit";

// todos = createSlice Hook (useState와 비슷한 역할)
const todos = createSlice({
  // 키 값(?) todos
  name: "todos",
  // 값 객체 배열
  initialState: [
    {
      id: 0, // id
      title: "", // 제목
      body: "", // 내용
      isDone: "", // 완료, 취소 여부
    },
  ],
  // 전용 함수
  reducers: {
    // Todo값 추가하기
    addTodo(state, action) {
      console.log(current(state));
      return [...state, action.payload];
    },
    // Todo값 삭제하기
    deleteTodo(state, action) {
      return (state = [...action.payload]);
    },
    // Done 여부 수정하기
    toggleStatusTodo(state, action) {
      return (state = [...action.payload]);
    },
    // Id값 가져오기
    getTodoById(action) {
      return action.payload;
    },
  },
});

// 함수 사용을 위해 내보내기
export const { addTodo, deleteTodo, toggleStatusTodo, getTodoById } = todos.actions;

export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
