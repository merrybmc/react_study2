import React from "react";

export default function Box(data) {
  const clickMe = () => {
    alert("리액트 강의를 마쳤습니다.");
  };
  return (
    <div className="box">
      {data.num} {data.name} <button onClick={clickMe}>버튼</button>
    </div>
  );
}
