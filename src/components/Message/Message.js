import React from 'react';

const Message = (props) => {
  return (
    <div className="Message">
      <h1>
        {props.message}
      </h1>
      <button onClick={props.prepareGame}>
        Try again?
      </button>
    </div>
  );
}

export default Message;