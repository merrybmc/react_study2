import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
// import Todo from "../components/todo/Todo";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    { id: 2, title: "리액트 공부하기", body: "리액트 기초를 공부해봅시다", isDone: true },
    {
      id: 3,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    { id: 4, title: "리액트 공부하기", body: "리액트 기초를 공부해봅시다", isDone: true },
  ]);

  return (
    <Layout>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
}
