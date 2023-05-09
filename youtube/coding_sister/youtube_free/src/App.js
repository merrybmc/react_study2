// import { useState } from "react";
// import "./App.css";
// import TodoBoard from "./component/TodoBoard";

// export default function App() {
//   // state
//   const [name, setName] = useState("");
//   const [todo, setTodo] = useState([]);

//   const onChange = (event) => {
//     setName(event.target.value);
//   };

//   const addItem = () => {
//     setTodo([...todo, name]);
//   };

//   return (
//     <main>
//       <input type="text" onChange={onChange} />
//       <button onClick={addItem}>추가</button>
//       <div className="lists"></div>
//       <TodoBoard todo={todo} />
//     </main>
//   );
// }

import { useState } from "react";

function Baby(props) {
  return <div>{props.name}</div>; // props의 제일 간편하게 쓸 수 있게 줄인 방법
  // 노마드가 막 원시적인거 갈켜주자나여
  // 이거의 이전 버전이
}
function Child({ name }) {
  return <Baby name={name} />;
}
function Parent({ name }) {
  return <Child name={name} />;
}
function App() {
  const [name] = useState("르탄");
  return <Parent name={name} />;
}

export default App;
