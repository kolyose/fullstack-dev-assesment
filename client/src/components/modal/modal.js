import React from 'react';

const Modal = ({ title, children }) => (
  <div>
    <h1>{ title }</h1>
    <div>{ children }</div>
  </div>
);

export default Modal;