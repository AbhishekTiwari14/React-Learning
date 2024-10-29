/* eslint-disable no-unused-vars */
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const err = useRouteError();
    console.log(err)

  return (
    <div>
      <h1>OOPS! Something went wrong</h1> 
      <h1>{err.status} : {err.statusText}</h1>
    </div>
  )
}

export default ErrorPage
