import React, { useState } from 'react'
import useAdd from './useAdd'

const Cumstomcountone = () => {
    
      const [count,countIncreament,countDecreament,countReset] = useAdd()
     

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={countIncreament}>+</button>
      <button onClick={countDecreament}>-</button>
      <button onClick={countReset}>Reset</button>
    </div>
  )
}

export default Cumstomcountone
