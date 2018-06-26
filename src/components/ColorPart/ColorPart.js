import React from 'react';

const ColorPart = (props) => {
  const backStyle = {
    backgroundColor: props.backgroundColor
  };

  return (
    <div style={backStyle} className="BackgroundColor">
      <p className="TextColor">
        {props.textColor}
      </p>
    </div>
  );
}

export default ColorPart;