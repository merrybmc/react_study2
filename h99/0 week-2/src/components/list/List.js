import { useDispatch, useSelector } from "react-redux";

import { toggleStatusTodo, getTodoById, deleteTodo } from "../../store";
import Todo from "../todo/Todo";

export default function List() {
  let todos = useSelector((state) => {
    return state.todos;
  });

  let dispacth = useDispatch();

  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    dispacth(deleteTodo(newTodos));
    console.log(todos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    dispacth(toggleStatusTodo(newTodos));
  };

  // const onAbout = (todoId) => {
  //   todos.map((todo) => {
  //     if (todo.id === todoId) {
  //       return todo.id;
  //     }
  //   });
  // };

  return (
    <div>
      <div>
        <h1>Working</h1>
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return <Todo todo={todo} key={todo.id} onDeleteHanlder={onDeleteHandler} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <h1>Done</h1>
        {todos.map((todo) => {
          if (todo.isDone === true) {
            return <Todo todo={todo} key={todo.id} onDeleteHanlder={onDeleteHandler} onEditHandler={onEditHandler} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
