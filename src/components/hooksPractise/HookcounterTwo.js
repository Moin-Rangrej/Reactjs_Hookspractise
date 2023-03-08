import React, { useState } from 'react'

function HookcounterTwo() {
    // const initialCount = 0;
    const [count,setCount] = useState(0)
    
    const IncreamentFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(preCount => preCount + 1)
        }
    }

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(preCount => preCount + 1)}>Increament</button>
      <button onClick={() => setCount(preCount => preCount - 1)}>Decreament</button>
      <button onClick={IncreamentFive}>Increament By 5</button>
    </div>
  )
}

export default HookcounterTwo


