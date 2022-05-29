import React, { useState } from 'react';
// import User from './Users';
function C1() {
  const [form, setform] = useState({
    name: '',
    emails: '',
    phone: '',
    password: '',
    c: '',
    otp: '',
  });

  console.log('Radhe', form);
  const handlechange = (e) => {
    // console.log(e.target.placeholder, e.target.value);
    setform({ ...form, [e.target.placeholder]: e.target.value });
  };
  const inputStyle = {
    display: 'block',
    margin: 15,
  };
  return (
    <>
      <h1>Users Table </h1>
      <input
        style={inputStyle}
        placeholder="name"
        value={form.name}
        onChange={handlechange}
      />

      <input
        style={inputStyle}
        placeholder="emails"
        value={form.emails}
        onChange={handlechange}
      />

      <input
        style={inputStyle}
        placeholder="phone"
        value={form.phone}
        onChange={handlechange}
      />
      <input
        style={inputStyle}
        placeholder="password"
        value={form.password}
        onChange={handlechange}
      />
      <input
        style={inputStyle}
        placeholder="c"
        value={form.c}
        onChange={handlechange}
      />
      <input
        style={inputStyle}
        placeholder="otp"
        value={form.otp}
        onChange={handlechange}
      />
      <button>Click Me</button>
      {JSON.stringify(form)}
    </>
  );
}

export default C1;
