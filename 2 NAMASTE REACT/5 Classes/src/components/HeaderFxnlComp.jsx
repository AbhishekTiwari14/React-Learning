/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react"

const HeaderFxnlComp = ({name}) => {    

  const [x, setX] = useState(0);
  const [y, setY] = useState(100);

  useEffect(()=> {
    const timer = setInterval(()=> {
        console.log("Wooohoo");
    }, 1000)

    return () => {
        clearInterval(timer);
    } 
  }, [])

  return (
    <>
      <h1>Header</h1>
      <h1> Name: {name}</h1>
      <h1>{x}</h1>
      <button onClick={()=> setX(1)}>Change X</button>
      <h1>{y}</h1>
      <button onClick={()=> setY(1)}>Change X</button>
    </>
  )
}

export default HeaderFxnlComp
