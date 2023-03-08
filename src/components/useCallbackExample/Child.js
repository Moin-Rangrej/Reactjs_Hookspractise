import React, { memo } from 'react'

const Child = () => {
    console.log("from child class");
  return (
    <div>
      <h1>From Child</h1>
      
    </div>
  )
}

export default memo(Child)