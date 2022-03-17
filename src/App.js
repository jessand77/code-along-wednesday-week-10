/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import CalculationForm from 'components/CalculationForm';

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="app">
      <p>Counter value: {counter}</p>
      <button onClick={increaseCounter}>Increase</button>
      <CalculationForm />
    </div>
  )
}
