import React from 'react';
  
  export default function Square(props) {
    return (
      <button style={{backgroundColor: props.backgroundColor}} className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }