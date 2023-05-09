export default function Todo({ todo, key, setTodos, onDeleteHanlder, onEditHandler }) {
  return (
    <div>
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div>
        <button onClick={() => onDeleteHanlder(todo.id)}>삭제하기</button>
        <button onClick={() => onEditHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
}
