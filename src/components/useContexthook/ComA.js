import React, { useContext } from 'react'
import ComB from './ComB'
import { Lastname } from './Usecontext'

const ComA = () => {
    const lname = useContext(Lastname)
    console.log(lname,"from A");
  return (
    <div>
    <h1>My name is {lname}</h1>
    </div>
  )
}

export default ComA
