import React from 'react';

const Summary = (props) => {
  return (
    <div>
      <h2>Hi there {props.username}. The sum is {props.numberOne + props.numberTwo}</h2>
    </div>
  )
}

export default Summary;