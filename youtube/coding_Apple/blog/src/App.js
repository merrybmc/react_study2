import logo from "./logo.svg";
import "./App.css";
import { startTransition, useState } from "react";

function App() {
  let logo = "ReactBlog";

  const [title, setTitle] = useState([
    { id: 0, value: "남자 코트 추천" },
    { id: 1, value: "강남 우동 맛집" },
    { id: 2, value: "파이썬 독학" },
    { id: 3, value: "여행지 추천" },
  ]);
  const [day, setDay] = useState(["2월 17일 발행", "8월 6일 발행", "12월 12 일 발행", "12월 31일 발행"]);
  const [good, setGood] = useState([
    { id: 1, num: 0 },
    { id: 2, num: 0 },
    { id: 3, num: 0 },
    { id: 4, num: 0 },
  ]);
  const [modal, setModal] = useState(false);
  const [modalTitleSwith, setmodalTitleSwith] = useState(0);
  const [input, setInput] = useState("");

  const plusGood = (value) => {
    const myArr = good.map((arr) => {
      if (arr.id === value + 1) {
        return {
          ...arr,
          num: arr.num + 1,
        };
      } else {
        return { ...arr };
      }
    });
    console.log(myArr);
    setGood(myArr);
  };

  const btnChange2 = () => {
    let myArr = [...title];
    myArr[0].value = "여자 코트 추천";
    setTitle(myArr);
  };

  const btnChange = () => {
    let myArr = [...title];
    myArr[0].value = "여자 코트 추천";
    setTitle(myArr);
  };

  const btnSort = () => {
    let myArr = [...title];
    myArr.sort((value1, value2) => {
      return value1.value.localeCompare(value2.value);
    });
    setTitle(myArr);
  };

  const modalTitle = (num) => {
    setmodalTitleSwith(num);
  };

  const addTitle = () => {
    setInput(...title, value:input);
  };

  return (
    <>
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>
          <button onClick={btnChange}>변경</button>
          <button onClick={btnSort}>정렬</button>
        </h4>

        {[0, 1, 2, 3].map((value) => {
          return (
            <div className="list">
              <h4>
                <span onClick={() => modalTitle(value)}>{title[value].value}</span>
                <span onClick={() => plusGood(value)}>💗</span> +{good[value].num}
              </h4>

              <p>{day[value]}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        글 수정
      </button>

      <input
        name="value" onChange={(event) => {
          event.stopPropagation();
          const {name,value} = event.target;
          
        }}
      />
      <button onClick={() => addTitle()}>추가</button>
      {modal === true ? <Modal modalTitle={modalTitle} modalTitleSwith={modalTitleSwith} btnChange2={btnChange2} title={title} /> : null}
    </>
  );
}

function Modal({ title, btnChange2, modalTitleSwith }) {
  return (
    <div className="modal">
      <h4>{title[modalTitleSwith].value}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => btnChange2()}>수정하기</button>
    </div>
  );
}

export default App;
