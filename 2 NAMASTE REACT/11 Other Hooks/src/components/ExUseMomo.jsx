import { useMemo } from "react";
import { useState } from "react";

const ExUseMemo = () => {

    //Function to check the number is prime
    function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
    }
    return true;
    }
  //Function to find the nth prime number
  //This fxn. is called when user changes n & will not be called when component re-renders fue to change in name 
  function findNthPrime(n) {
   let count = 0;
   let num = 2;
   console.log("re-render");
   while (count < n) {
     if (isPrime(num)) {
      count++;
     }
     num++;
   }
   return num - 1;
  }

  const [inputNumber, setInputNumber] = useState();
  const [name, setName] = useState("")

  const nthPrime = useMemo(()=> findNthPrime(inputNumber), [inputNumber]);

  return (
    <div className="bg-gray-400 h-60 w-1/2 p-4">
      <p className="text-orange-100 font-bold">THIS IS USEMEMO() EXAMPLE</p>
     <label htmlFor="">Enter Name: </label>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="border border-black p-2 m-2"/>
      <p className="mt-2 font-bold text-lg">Hello {name}</p>
      <br />
      <label htmlFor="">Enter No.: </label>
      <input type="number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} className="border border-black p-2 m-2"/>
      <p className="mt-2 font-bold text-lg">{inputNumber}th Prime No. is {nthPrime}</p>
    </div>
  )
}

export default ExUseMemo
