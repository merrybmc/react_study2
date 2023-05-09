import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
// import styled from "styled-components";
// import shoesData from "./data";
import React from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail';
import Cart from './routes/Cart';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  const [shoes, setShoes] = useState([
    {
      id: 0,
      title: 'White and Black',
      content: 'Born in France',
      price: 120000,
    },

    {
      id: 1,
      title: 'Red Knit',
      content: 'Born in Seoul',
      price: 110000,
    },

    {
      id: 2,
      title: 'Grey Yordan',
      content: 'Born in the States',
      price: 130000,
    },
  ]);

  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  // https://codingapple1.github.io/shop/data3.json
  // axios
  //   .get("https://codingapple1.github.io/shop/data2.json")
  //   .then((data) => {
  //     let temp = [...shoes, ...data.data];
  //     console.log(temp);
  //     setShoes(temp);
  //     console.log("___", shoes);
  //   })
  //   .catch(() => {
  //     console.log("요청 실패");
  //   });
  const getBtn = (count) => {
    if (count === 1) {
      axios
        .get('https://codingapple1.github.io/shop/data2.json')
        .then((myData) => {
          let temp = [...shoes, ...myData.data];
          setShoes(temp);
          setCount(count + 1);
        })
        .catch(() => {
          console.log('요청 실패');
        });
    } else if (count === 2) {
      axios
        .get('https://codingapple1.github.io/shop/data3.json')
        .then((myData) => {
          let temp = [...shoes, ...myData.data];
          setShoes(temp);
          setCount(count + 1);
        })
        .catch(() => {
          console.log('요청 실패');
        });
    } else if (count >= 3) {
      console.log('더 이상 불러올 수 없습니다.');
    }
  };

  axios.get('https://codingapple1.github.io/userdata.json').then((data) => {});

  let result = useQuery('작명', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((data) => {
      return data.data;
    });
  });
  console.log('@@@', result.data);

  return (
    <>
      <div className='App'>
        <div className='abc'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand href='#home'>Saerami`s Shop</Navbar.Brand>
              <Nav className='me-auto'>
                <Nav.Link
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Home
                </Nav.Link>
                {/* <Nav.Link href="#features">Features</Nav.Link> */}
                <Nav.Link
                  onClick={() => {
                    navigate('/Cart');
                  }}
                >
                  Cart
                </Nav.Link>
                <Nav.Link onClick={() => navigate('event')}>Event</Nav.Link>
                <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        {/* <Link to="/">홈</Link>
        <br />
        <Link to="/detail">상세 페이지</Link>
        <br />
        <Link to="/about">회사 정보 페이지</Link> */}

        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className='main-bg'></div>
                {/* <Button variant="primary">Primary</Button>{" "} */}
                <div className='Container'>
                  <Row>
                    {shoes.map((shoes) => {
                      return <Card shoes={shoes} i={shoes.id} navigate={navigate} />;
                    })}
                  </Row>
                </div>
                <p>{result.isLoading ? '로딩중' : result.data.name}</p>
                <p>{result.data && result.data.name}</p>
                <button
                  onClick={() => {
                    getBtn(count);
                  }}
                >
                  버튼
                </button>
              </>
            }
          />
          <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
          <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
          <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
          <Route
            path='/event'
            element={
              <>
                <div>오늘의 이벤트</div>
                <button onClick={() => navigate('event/one')}>이벤트 1</button>
                <button onClick={() => navigate('event/two')}>이벤트 2</button>
                <Outlet></Outlet>
              </>
            }
          >
            <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
            <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
          </Route>
          <Route
            path='/about'
            element={
              <>
                <div>회사 정보 페이지입니다.</div>
                <Outlet></Outlet>
                {/* <Link to="member">회사 멤버 페이지</Link> */}

                <Link to='member'>
                  <button>회사 멤버 페이지</button>
                </Link>

                <button
                  onClick={() => {
                    navigate('about/member');
                  }}
                >
                  회사 멤버 페이지
                </button>

                <br />
                <Link to='location'>회사 위치 페이지</Link>
              </>
            }
          >
            <Route path='member' element={<div>회사 멤버 페이지입니다.</div>} />
            <Route path='location' element={<div>회사 위치 페이지입니다.</div>} />
          </Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

function Card({ shoes, i, navigate }) {
  return (
    <Col className='col-img1'>
      <img src={'imgs/shoes' + i + '.jpg'} width='80%' alt='' onClick={() => navigate('/detail/' + i)} />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
    </Col>
  );
}
