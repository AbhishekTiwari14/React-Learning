import { useState, useEffect, useRef, useCallback } from 'react'

function App() {
  const [password, setPassword] = useState("");   
  const [length, setLength] = useState(7);   
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let psw = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) {
      str+= "0123456789";
    }
    if (charAllowed) {
      str+= "!@#$%^&*~`*()_-+{}";
    }
    for (let i = 0; i < length; i++) {  
      psw += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(psw);
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, generatePassword]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(password);

  }, [password])

  return (
    <>
      <div className='w-screen h-screen bg-black flex justify-center'>
        <div className='bg-gray-600 max-w-full min-w-fit p-8 rounded-lg h-fit mt-8 mx-4 '>
          <h1 className='text-center font-bold p-4'>GENERATE PASSWORD</h1>
          <div className='flex justify-center align-middle'>
          <input type="text" value={password} readOnly name="password" id="password" className='rounded-sm read-only w-full px-2 py-2 my-2' ref={passwordRef}/>
          <button className='bg-blue-600  rounded-md text-white my-2 px-4 text-center hover:bg-red-600' onClick={copyToClipboard}>copy</button>
          </div>
          <input type="range" min={7} max={20} value={length} onChange={(e) => {
            setLength(e.target.value)}} className='cursor-pointer'/>
          <label htmlFor="length" className='text-white text-md font-semibold ml-2 mr-6  text-center'>Length: {length}</label>
          <input type="checkbox" name="charAllowed" id="charAllowed" className='mr-2' onChange={() => {setCharAllowed((prev) => !prev )}}/>
          <label htmlFor="charAllowed" className='text-white text-md font-semibold mr-6'>Allow Character</label>
          <input type="checkbox" name="numberAllowed" id="numberAllowed" className='mr-2'  onChange={() => setNumberAllowed((prev) => !prev) }/>
          <label htmlFor="numberAllowed" className='text-white text-md font-semibold mr-6'>Allow Number</label>
        </div>
      </div>
    </>
  )
}

export default App
