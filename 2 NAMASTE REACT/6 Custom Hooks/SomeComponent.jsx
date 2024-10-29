import React from 'react'
import useApi from './useApi'
import {useParams} from "react-router-dom"

const SomeComponent = () => {

    const {userId} = useParams();
    const userData = useApi(userId);

  return (
    <div>
        <h1>{userData?.name}</h1>
        <h1>{userData?.age}</h1>
        <h1>{userData?.gender}</h1>
    </div>
  )
}

export default SomeComponent
