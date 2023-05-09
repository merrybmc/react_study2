import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberUp } from "./redux/modules/counter";

function App() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setNumber(+inputValue);
  };

  const increaseNumber = () => {
    dispatch(numberUp(number));
  };

  const finalState = useSelector((state) => state.Counter);
  const finalNumber = finalState.number;

  return (
    <div>
      <input onChange={onChangeHandler} />
      <button onClick={increaseNumber}>숫자 올리기 버튼</button>
      <p>{finalNumber}</p>
    </div>
  );
}

export default App;
