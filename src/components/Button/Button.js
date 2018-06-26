import React from 'react';

const Button = (props) => {
  const styling = {
    danger: {
      backgroundColor: '#ff0000',
      marginLeft: '35px',
      border: '5px solid #ff0000'
    },
    success: {
      backgroundColor: '#00ff00',
      border: '5px solid #00ff00'
    }
  };

  return (
    <button className="Button" style={styling[props.type]} onClick={props.onClick}>
      {props.children}
    </button>  
  );
}

export default Button;