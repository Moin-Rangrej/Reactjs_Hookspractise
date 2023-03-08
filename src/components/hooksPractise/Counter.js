import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)
    let [count1,setCount1] = useState(50)

    function countIncreament() {
      setCount((count) => count + 1)
    }

    function countDecreament() {
      setCount1((preState) => preState - 1)
    }

    useEffect(() => {
      console.log(`count is ${count1}`)
    },[count1])

  return (
    <div>
     <h1>{count}</h1>
      <button onClick={countIncreament}>+</button>
      <h1>{count1}</h1>
      <button onClick={countDecreament}>-</button>
    </div>
  )
}

export default Counter
