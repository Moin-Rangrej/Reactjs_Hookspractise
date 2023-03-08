import React, { useState } from 'react'
import Mycustomhook2 from './Mycustommhook2'
import useTitlechange from './useTitlechange'

const Mycustomhook = () => {
   const [count,setCount] = useState(0)
   useTitlechange(count)
  return (
    <div>
    <Mycustomhook2 />
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </div>
  )
}

export default Mycustomhook
