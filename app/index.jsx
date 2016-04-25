import React from 'react';
import ReactDOM from 'react-dom';

const message = "Change this string to see hot reload working.";

ReactDOM.render(
  (<h1>{message}</h1>),
  document.getElementById('app')
);
