import React, { useState } from 'react';
import './App.css';
import Circle from './Circle';

function App() {
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    // console.log(event.currentTarget.value);
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Hello', value);
  };
  return (
    <div>
      <Circle bgColor='teal' borderColor='orange' />
      <Circle bgColor='tomato' text='good' />

      <form onSubmit={onSubmit}>
        <input type='text' value={value} onChange={onChange} placeholder='username' />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
