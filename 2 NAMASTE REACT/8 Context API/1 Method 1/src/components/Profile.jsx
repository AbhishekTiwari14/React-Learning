import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)


    if(!user) return <div>Please Login</div>
  return (
    <div>
      Welcome {user.name}, I guess you are {user.age} YO;
    </div>
  )
}

export default Profile
