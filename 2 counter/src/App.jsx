import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);

  const increaseCount = () => {
    if(counter<10){
      setCounter(counter+1);
    }
  }

  const decreaseCount = () => {
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <div>
        <h1>COUNTER</h1>
        <h2>{counter}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>
    </>
  )
}

export default App
