import React, { useMemo, useState } from 'react'

const Memoexample1 = () => {
    const [countOne,setCountone] = useState(0)
    const [countTwo,setCountTwo] = useState(0)
    
    const Increamentone = () => {
        setCountone(countOne + 1)
    }

    const IncreamentTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        console.warn(".........");
        let i = 0;
        while (i <= 2000000000)
        {
            i++;
        } 
        return countOne%2 === 0
    },[countOne])

  return (
    <div>
        <button onClick={Increamentone}>Counter - {countOne}</button>  
        <span>{isEven ? "Even" : "Odd"}</span>
        <button onClick={IncreamentTwo}>Counter - {countTwo}</button>  
    </div>
  )
}

export default Memoexample1
