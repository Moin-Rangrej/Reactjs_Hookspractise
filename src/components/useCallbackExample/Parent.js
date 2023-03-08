import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count,setCount] = useState(0)
    const [countTwo,setcountTwo] = useState(0)
    const Increament = () => {
      console.log("Hello Moin");
        setCount(count + 1)
    }
    const fun = useCallback(() => {
      
    },[countTwo])
     
  return (
    <div>
      <Child countTwo={countTwo} fun={fun}/>
      <button onClick={Increament}>Click - {count}</button>
    </div>
  )
}

export default Parent
