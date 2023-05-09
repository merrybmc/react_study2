import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Cart from "./routes/Cart";
import { Button } from "react-bootstrap";

let num = 2;
function App() {
  // const [todoContent, setTodoTitle] = useState("");
  // const [todoList, setTodoList] = useState([
  //   { id: 0, content: "시험 치는중" },
  //   { id: 1, content: "시험 푸는중" },
  // ]);
  // const onChangeTitle = (e) => {
  //   const changeTitle = e.target.value;
  //   setTodoTitle(changeTitle);
  // };

  // const onClickHandeler = (e) => {
  //   e.preventDefault();
  //   const newTodo = {
  //     id: num,
  //     content: todoContent,
  //   };
  //   setTodoTitle("");
  //   setTodoList([...todoList, newTodo]);

  //   num = num + 1;
  // };

  return (
    <form>
      <Link to="/detail">상세페이지</Link>
      <Link to="/Cart">카트</Link>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>
              <p>메인 페이지입니다.</p>

              {/* <div>
                <input onChange={onChangeTitle} value={todoContent} type="text" />
                <Button onClick={onClickHandeler} variant="info">
                  추가하기
                </Button>
              </div>
              <h1>Todo List</h1>
              <div>
                {todoList.map((todoList) => (
                  <div className="box">{todoList.content}</div>
                ))}
              </div> */}
            </div>
          }
        />
        <Route
          path="/detail"
          element={
            <div>
              <div>id:1</div>
              <button>
                <Link to="/">이전으로</Link>
              </button>
              <h1>리액트</h1>
              <h4>리액트를 배워봅시다.</h4>
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </form>
  );
}

export default App;
