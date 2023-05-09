import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";
import { increase } from "../store";

export default function Cart() {
  let a = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  let b = useSelector((state) => {
    return state.stock;
  });

  let c = useSelector((state) => {
    return state.bucket;
  });

  let dispacth = useDispatch();

  console.log(a);
  return (
    <>
      <button></button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{c[0].name}</td>
            <td>{c[0].count}</td>
            <td>
              <button
                onClick={() => {
                  dispacth(increase(100));
                  console.log(a.age);
                }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>{c[1].name}</td>
            <td>{c[1].name}</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
