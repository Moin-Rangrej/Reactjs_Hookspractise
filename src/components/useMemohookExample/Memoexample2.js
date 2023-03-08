import React, { useMemo, useState } from 'react'

const Memoexample2 = () => {

    const [count,setCount] = useState(0)
    const [show,setShow] = useState(false)

    const getValue = () =>{
       return setCount(count + 1)
    }

    const CountNumber = (num) =>{
        console.log("Counter num" , num);
        for (let i = 0; i < 10000000 ; i++) {}
        return num
    }
    
    const checkData = useMemo(() =>{
        return CountNumber(count)
    },[count])
    

  return (
    <div>
      <center>
        <button onClick={getValue}>Click</button>
        <br></br>
        <span>{checkData}</span>
        <br></br>
        <button onClick={() => setShow(!show)}>{show ? "You click me" : "click me plz"}</button>
      </center>
    </div>
  )
}

export default Memoexample2
