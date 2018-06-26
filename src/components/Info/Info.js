import React from 'react';

const Info = (props) => {
  return (
    <div className="Info">
      <h2 className="ScoreBox">
        {props.score} / {props.attempts}
      </h2>
      <h2 className="Timer">
        {5 - props.secondsPassed} s.
      </h2>
    </div>
  );
}

export default Info;