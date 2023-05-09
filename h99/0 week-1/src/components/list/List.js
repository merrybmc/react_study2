import Todo from "../todo/Todo";
import React from "react";

export default function List({ todos, setTodos }) {
  // 삭제 함수 , 파라미터 (todoId)

  const onDeleteHanlder = (todoId) => {
    // filter 콜백함수로 파라미터의 값과 todo의 id값과 같지 않은 것만 리턴
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId; // todo.id 값이 서로 같으면 그것만 빼고
      // 나머지를 newTodos에 리턴
    });
    // setTodos에 newTodos 대입
    setTodos(newTodos);
  };

  // isDone 수정 함수 , 파라미터 (todoId)
  const onEditHandler = (todoId) => {
    // map 콜백함수로 파라미터의 값과 todo.id의 값이 같으면
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        // todo의 해당 인덱스에서 isDone을 반대로 수정 ( false면 true, true면 false)
        // 하고 newTodos로 리턴
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        // if의 값이 아닐 경우 그냥 todo의 인덱스값들 리턴
        return { ...todo };
      }
    });
    // setTodos에 newTodos 대입
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Working..</h2>
      <div>
        {/* todos에 map 콜백함수 , 파라미터 todo */}
        {todos.map((todo) => {
          // 만약 todo의 isDone 키 값이 false면
          if (todo.isDone === false) {
            return (
              <Todo
                // Todo에 todo의 인덱스 값들,
                // key에 todo의 id키의 value 값들
                // setTodos State 수정값
                // onDeleteHandler, onEditHandler 함수 전달
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            // 조건이 다르면 null 리턴
            return null;
          }
        })}
      </div>
      <h2>Done..!</h2>
      <div>
        {/* todos에 map 콜백함수, 파라미터 todo */}
        {todos.map((todo) => {
          // 만약 todo의 isDone 키 값이 true면
          if (todo.isDone) {
            return (
              <Todo
                // Todo에 todo의 인덱스 값들,
                // key에 todo의 id키의 value 값들
                // setTodos State 수정값 전달
                // onDeleteHandler, onEditHandler 함수 전달
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            // 조건이 다르면 null 리턴
            return null;
          }
        })}
      </div>
    </div>
  );
}
