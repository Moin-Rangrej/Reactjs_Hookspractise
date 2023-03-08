import React, { useRef } from 'react'

const UseRefcount = () => {
    const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log('I rendered!');
  return (
    <div>
    <h1>From useReference</h1>
  <button onClick={handle}>Click me</button>
  </div>
  );
}

export default UseRefcount
