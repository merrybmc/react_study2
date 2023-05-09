import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter";
import Todos from "./component/Todos";

export default function App() {
  return (
    <div>
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}
