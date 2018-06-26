import React from 'react';

const Message = (props) => {
  const icon = (props.message[0] === 'W' ? <i className="fa fa-smile-wink" /> : <i className="fa fa-sad-tear" />);
  const additionalContent = (props.message[0] === 'W' ? <p>You scored 10 right answers!</p> : <p>You lost all your lifes!</p>);
  return (
    <div className="Message">
      <p className="Conclusion">
        {icon}
      </p>
      <h1>
        {props.message}
      </h1>
      {additionalContent}
      <button onClick={props.prepareGame} className="Again">
        Try again?
      </button>
    </div>
  );
}

export default Message;