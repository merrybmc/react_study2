import styled from 'styled-components';
import { useState } from 'react';

// interface CircleProps {
//   bgColor: string;
// }

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface PlayerShape {
  name: string;
  age: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 100px;
  border: 3px solid ${({ borderColor }) => borderColor};
`;

export default function Circle({ bgColor, borderColor, text = 'default text' }: ContainerProps) {
  const sayHello = (playerObject: PlayerShape) => `Hello ${playerObject.name} you are ${playerObject.age} years old.`;

  // const [value, setValue] = useState<number | string>(1);
  const [number, setNumber] = useState(1);

  return (
    <>
      <Container bgColor={bgColor} borderColor={borderColor ?? 'aqua'}></Container>
      {sayHello({ name: 'min', age: '123' })}
      <div>{text}</div>
    </>
  );
}
