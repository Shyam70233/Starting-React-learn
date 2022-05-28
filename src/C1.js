import React, { useState } from 'react';
function C1() {
  // console.log(useState('RadheShyam'));
  const [x, setVal] = useState(0);
  const p1 = () => {
    setVal(x + 1);
  };
  const p2 = () => {
    setVal(x - 1);
  };
  const p3 = () => {
    setVal(0);
  };
  const p4 = () => {
    setVal(x + 200);
  };

  return (
    <>
      <h1>2nd Work</h1>
      <h1>X : {x}</h1>
      <button onClick={p1}>+1</button>
      <button onClick={p2}>-1</button>
      <button onClick={p3}>0</button>
      <button onClick={p4}>200</button>
    </>
  );
}

export default C1;
