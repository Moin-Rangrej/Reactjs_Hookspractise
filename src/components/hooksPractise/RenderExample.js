import React, { useEffect, useState } from 'react'

const RenderExample = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("Moin")
    
    useEffect(() => {
        
    },[name])
  return (
    <div>
    {console.log("render" + count)}
    <h1>{count} {name}</h1>
    <button onClick={() => setName("Rangrej")}>Click Name</button>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default RenderExample
