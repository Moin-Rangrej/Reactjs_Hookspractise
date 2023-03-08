import React, { useContext } from 'react'
import ComC from './ComC'
import { Firstname } from './Usecontext'

const ComB = () => {
    const fname = useContext(Firstname)
    console.log(fname,"com b");
  return (
    <div>
      <h1>My name is {fname}</h1>
    </div>
  )
}

export default ComB
