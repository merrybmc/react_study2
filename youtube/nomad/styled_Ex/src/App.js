import styled, { keyframes } from 'styled-components';

function App() {
  const Father = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Box = styled.div`
    background-color: ${({ bgColor }) => bgColor};
    width: 100px;
    height: 100px;
  `;

  const Text = styled.span`
    color: white;
  `;

  const Circle = styled(Box)`
    border-radius: 50px;
  `;

  const Btn = styled.button`
    color: white;
    background-color: tomato;
    border: 0;
    border-radius: 15px;
    width: 10%;
  `;

  const Input = styled.input.attrs({ required: true, minLength: 10 })`
    background-color: tomato;
    width: 20%;
  `;

  const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }`;

  const Emoji = styled.span`
    font-size: 50px;
  `;

  const Box2 = styled.div`
    height: 100px;
    width: 100px;
    background-color: tomato;
    animation: ${rotationAnimation} 1s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    ${Emoji} {
      &:hover {
        font-size: 30px;
      }
      &:active {
        opacity: 0;
      }
    }
    span:hover {
    }
    span:active {
    }
  `;

  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.backgroundColor};
  `;

  return (
    <>
      <Father>
        <Box bgColor='teal'>
          <Text>Hello</Text>
        </Box>
        <Box bgColor='tomato' />
        <Circle bgColor='orange' />
        <br />
        <Btn>Log in</Btn>
        <Btn as='a' href='https://www.naver.com'>
          Log in
        </Btn>
        <Input />

        <Box2>
          <Emoji>😊</Emoji>
        </Box2>

        <Title>타이틀</Title>
      </Father>
    </>
  );
}

export default App;
