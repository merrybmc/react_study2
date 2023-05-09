import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [todo, setTodo] = useState({ title: '' });
  const [todos, setTodos] = useState(null);
  const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({ title: '' });

  // get 읽기 read
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todos');
    setTodos(data);
  };

  // post 추가 create
  const onSubmitHandler = (todo) => {
    axios.post('http://localhost:3001/todos', todo);
  };

  // delete 삭제 delete
  const onClickDeleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
  };

  // patch 수정 update
  const onClickEditButtonHandler = (todoId, edit) => {
    axios.patch(`http://localhost:3001/todos/${todoId}`, edit);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <input
          type='text'
          onChange={(event) => {
            const { value } = event.target;
            setTodo({ ...todo, title: value });
          }}
        ></input>
        <button>추가하기</button>
        <div>
          <input
            type='text'
            placeholder='수정하고싶은 ID'
            onChange={(event) => {
              setTargetId(event.target.value);
            }}
          />
          <input
            type='text'
            placeholder='수정값 입력'
            onChange={(event) => {
              setEditTodo({
                ...editTodo,
                title: event.target.value,
              });
            }}
          />
          <button
            type='button'
            onClick={() => {
              onClickEditButtonHandler(targetId, editTodo);
            }}
          >
            수정하기
          </button>
        </div>
      </form>
      <div>
        {todos?.map((todo) => (
          <div>
            {todo.id} : {todo.title}
            <button
              onClick={() => {
                onClickDeleteButtonHandler(todo.id);
              }}
            >
              삭제하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
