import React, { PropTypes } from 'react';

const Hello = () => {
  return (<h1>Hello Component</h1>);
}

const Message = ({message}) => {
  return (<p>{message}</p>);
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}

export {
  Hello,
  Message
}
