import React, { useRef } from 'react';
// import User from './Users';
function C1() {
  const ref1 = useRef();
  const ref2 = useRef();
  const handlechange = () => {
    console.log(ref1.current);
    console.log(ref2.current);
    ref1.current.rows = 10;
    ref1.current.cols = 20;
    ref1.current.disabled = true;
    ref1.current.placeholder = 'Enter Message';
    ref1.current.style.color = 'red';
    ref1.current.style.background = 'yellow';
    ref1.current.style.border = '5px solid black';

    ref2.current.type = 'date';
    ref2.current.min = '2022-05-20';
    ref2.current.max = '2022-05-30';
    ref2.current.value = '2022-05-17';
  };

  return (
    <>
      <h1>Users Table </h1>
      <textarea ref={ref1} />
      <input ref={ref2} />
      <button onClick={handlechange}>click me</button>
    </>
  );
}

export default C1;
