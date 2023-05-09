import { useState } from "react";

let number = 3;

export default function Form({ todos, setTodos }) {
  // todos 객체 사본 만들기
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  // todos 사본 todo State 만들기
  // todo State에 initialState 객체 사본 넣기
  const [todo, setTodo] = useState(initialState);

  // input에 입력을 했을 때
  const onChange = (event) => {
    // name = key 이름
    // value = key에 대입할 값
    const { name, value } = event.target;
    // todo의 key값에 입력된 값이 들어가세요
    setTodo({ ...todo, [name]: value });
  };

  // 버튼을 클릭하면
  const onSubmitHandler = (event) => {
    // 새로고침 리렌더링 ㄴ
    event.preventDefault();
    // title 또는 body가 공백이면 함수 종료
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    // todos 배열에 todo값을 추가하는데 id key값의 value를 number로 대입
    setTodos([...todos, { ...todo, id: number }]);
    // todo 값 초기화
    setTodo(initialState);
    // number 1 증가
    number++;
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        제목<input type="text" name="title" value={todo.title} onChange={onChange}></input>
        내용<input type="text" name="body" value={todo.body} onChange={onChange}></input>
        <button>추가하기</button>
      </form>
    </>
  );
}
