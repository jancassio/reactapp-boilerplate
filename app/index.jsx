import './styles/app.scss';
import './fonts';

import React from 'react';
import ReactDOM from 'react-dom';

import { Hello, Message, NyanCat } from './components';

const message = "Change this string to see hot reload working.";

ReactDOM.render(
  (
    <div>
      <Hello/>
      <Message message={message}/>
      <Message message={"react is AWESOME!"}/>
      <NyanCat/>
    </div>
  ),
  document.getElementById('app')
);
