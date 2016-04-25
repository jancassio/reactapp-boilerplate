import React from 'react';
import ReactDOM from 'react-dom';

import { Hello, Message } from './components';

const message = "Change this string to see hot reload working.";

ReactDOM.render(
  (
    <div>
      <Hello/>
      <Message message={message}/>
      <Message message={"react is AWESOME!"}/>
    </div>
  ),
  document.getElementById('app')
);
