// import "./App.css";
// MyComponent 파일에서 MyComponent 함수 불러오기
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

const App = () => {
  const favoriteNumber = 8547;
  return (
    <>
      <MyComponent favoriteNumber={favoriteNumber}>리액트</MyComponent>
      <Counter></Counter>
      <Say></Say>
    </>
  );
};

export default App;
