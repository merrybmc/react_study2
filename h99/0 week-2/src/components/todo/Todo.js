import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

export default function Todo({ todo, key, setTodos, onDeleteHanlder, onEditHandler }) {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
        <div>{todo.id}</div>
      </div>
      <div>
        <button onClick={() => onDeleteHanlder(todo.id)}>삭제하기</button>
        <button onClick={() => onEditHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
        <button onClick={() => navigate("/" + todo.id)}>asdasd</button>
      </div>
    </div>
  );
}
