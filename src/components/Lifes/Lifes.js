import React from 'react';

const Lifes = (props) => {
  let lifesLeft = [];
  for (let i = 0; i < props.lifesLeft; i++) {
    lifesLeft.push(
      <i className="fa fa-heart Icon" key={i} />
    );
  }

  return (
    <div className="Lifes">
      {lifesLeft}
    </div>
  );
}

export default Lifes;