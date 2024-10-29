import { useState } from "react"

function App() {

  const [color, setColor] = useState("white");


  return (
    <>
    <div className="w-screen h-screen" style={{backgroundColor: color}}>
      <div className= "flex gap-4 justify-center align-middle p-6 bg-gray-500"> 
        <button className="bg-red-600 text-white" onClick={() => setColor("red")}>Red</button>
        <button className="bg-yellow-600 text-white" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="bg-orange-600 text-white" onClick={() => setColor("orange")}>Orange</button>
        <button className="bg-green-600 text-white" onClick={() => setColor("green")}>Green</button>
        <button className="bg-blue-600 text-white" onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>       
    </>
  )
}

export default App
