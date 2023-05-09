import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import styled from "styled-components";

export default function Detail({ shoes }) {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
      console.log(1);
    }, 5000);
  }, [count]);

  let { id } = useParams();
  // let myId = shoes.find(function (x) {
  //   return x.id === id;
  // });

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">
          2초 이내 구매시 할인
          <button
            onClick={() => {
              setCount(count + 1);
              console.log(count);
            }}
          >
            버튼
          </button>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={"../../imgs/shoes" + id + ".jpg"} width="100%" alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p>
          <p>{shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
