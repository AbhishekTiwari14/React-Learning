import { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext';

const Login = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({name, age});
    }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value = {name} onChange={(e)=> setName(e.target.value)} placeholder='Name'/>
      <input type="text" value = {age} onChange={(e)=> setAge(e.target.value)} placeholder='Age'/>
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login
