import { useState } from "react";
import { useRef } from "react";

const ExUseRef = () => {

    let X = 5;
    const [Y, setY] = useState(5);
    const Z = useRef(5);

  return (
    <div className="bg-gray-400 h-60 w-1/2 p-4">
      <p className="text-orange-100 font-bold">THIS IS USEREF() EXAMPLE</p>
      <div className="flex align-middle justify-center mt-6 gap-6">
        <button className="p-2 bg-black text-white" onClick={()=> {
            X = X+1;
            console.log(X);
        }}>Increase X</button>
        <p className="font-bold text-lg">let = X = {X}</p>
      </div>
      <div className="flex align-middle justify-center mt-6 gap-6">
        <button className="p-2 bg-black text-white" onClick={()=> {
            setY(Y+1)
            console.log(Y);}}>Increase Y</button>
        <p className="font-bold text-lg">state = Y = {Y}</p>
      </div>
      <div className="flex align-middle justify-center mt-6 gap-6">
        <button className="p-2 bg-black text-white" onClick={()=> {
            Z.current = Z.current+1
            console.log(Z)
        }}>Increase Z</button>
        <p className="font-bold text-lg">ref = Z = {Z.current}</p>
      </div>
    </div>
  )
}

export default ExUseRef
