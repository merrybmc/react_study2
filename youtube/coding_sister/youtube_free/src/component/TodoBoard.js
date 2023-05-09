import React from "react";
import TodoItem from "./TodoItem";

export default function TodoBoard({ todo }) {
  console.log(todo);
  return (
    <div>
      <h1>Todo List</h1>
      <div className="todo">
        {todo.map((name) => (
          <TodoItem name={name} />
        ))}
      </div>
    </div>
  );
}
