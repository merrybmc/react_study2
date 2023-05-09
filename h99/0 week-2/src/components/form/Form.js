import './form.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store';
import { useState } from 'react';

let number = 0;
export default function Form() {
  // 사본
  const initialState = {
    id: 0,
    title: '',
    body: '',
    isDone: false,
  };

  // Form에서만 쓸 복사본
  const [todo, setTodo] = useState(initialState);

  // redux store에서 todos 값 가져오기
  let todos = useSelector((state) => {
    return state.todos;
  });

  // redux store의 값 바꾸는 hook
  let dispacth = useDispatch();

  // input에 입력을 했을 때
  const onChange = (event) => {
    // name = key 이름
    // value = key에 대입할 값
    const { name, value } = event.target;
    // todo의 key값에 입력된 값이 들어가세요
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHander = (event) => {
    // setTodo({ ...todo, id: number });
    console.log('>>>', todo);
    console.log('<<<', number);
    event.preventDefault();
    if (todo.title.trim() === '' || todo.body.trim() === '') return;
    dispacth(addTodo({ ...todo, id: number }));
    setTodo(initialState);
    number++;
  };

  return (
    <form className='form' onSubmit={onSubmitHander}>
      제목
      <input type='text' name='title' value={todo.title} onChange={onChange}></input>
      내용
      <input type='text' name='body' value={todo.body} onChange={onChange}></input>
      <button>추가하기</button>
    </form>
  );
}
