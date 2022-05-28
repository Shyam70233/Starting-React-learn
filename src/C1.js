import React, { useState } from 'react';
function C1() {
  // console.log(useState('RadheShyam'));
  const [name, setname] = useState('Radhe');
  const onchaneName = () => {
    setname('Shyam');
  };
  return (
    <>
      <h1>1st Work</h1>
      <div>My Name is: {name} </div>
      <button onClick={onchaneName}>clic to Chnage Name</button>
    </>
  );
}

export default C1;
