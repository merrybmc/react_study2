import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function About() {
  const navigate = useNavigate();
  let { id } = useParams();

  let todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <p>id = {todos[id].id}</p>
      <p>title = {todos[id].title}</p>
      <p>body = {todos[id].body}</p>
    </>
  );
}
