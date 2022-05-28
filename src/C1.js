import React, { useState } from 'react';
import User from './Users';
function C1() {
  console.log(User);
  return (
    <>
      <h1>Users Table </h1>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UserName</th>
            <th>Compnay</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {User.map((x) => (
            <tr>
              <td key={x.id}>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>{x.username}</td>
              <td>{x.company.name}</td>
              <td>{JSON.stringify(x.address)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default C1;
