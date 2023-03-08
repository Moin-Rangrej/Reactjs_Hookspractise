import React, { useState } from 'react'

const UseStatecount = () => {
    let [count,setCount] = useState(0)
    function countNumber(){
        console.log(`click ${count} times kkkl`);
        setCount(count++)
    }
    console.log("I render from useState");
  return (
    <div>
    <h1>From useState</h1>
      <button onClick={countNumber}>Click</button>
    </div>
  )
}

export default UseStatecount
