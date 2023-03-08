import React, { useState } from 'react'
import useTitlechange from './useTitlechange'

const Mycustomhook2 = () => {
   const [count,setCount] = useState(0)
   useTitlechange(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </div>
  )
}

export default Mycustomhook2
