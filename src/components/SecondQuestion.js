import React from 'react';

const SecondQuestion = (props) => {
  const { numberOne, numberTwo, onFirstNumberChange, onSecondNumberChange } = props;
  return (
    <div>
      <label htmlFor="numberOne">Type first number</label>
      <input
        id="numberOne"
        type="number"
        value={numberOne}
        onChange={onFirstNumberChange} />
      <label htmlFor="numberTwo">Type second number</label>
      <input
        id="numberTwo"
        type="number"
        value={numberTwo}
        onChange={onSecondNumberChange} />
    </div>
  )
}

export default SecondQuestion;