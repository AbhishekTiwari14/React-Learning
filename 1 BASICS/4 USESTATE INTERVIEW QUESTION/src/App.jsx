import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }

  //addValue fxn. will add 1 for each click, this is bcoz React optimizes rendering by batching updates. correctyAddValues fxn. will add 5 for each click, this is bcoz we have made fxn. calls "synchronous" by passing prevCounter which will be obtained only after prev. fxn. call gets completed 

  const correctlyAddValues = () => {
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
  }

  return (
    <>
      <div>Counter</div>
      <div>{counter}</div>
      <button onClick={addValue}>Add Values</button>
      <button onClick={correctlyAddValues}>Correctly Add Values </button>
    </>
  )
}

export default App
