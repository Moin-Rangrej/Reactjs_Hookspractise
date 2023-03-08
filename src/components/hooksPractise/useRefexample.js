//useRef used for uncontrolled component in react

import React, { useRef, useState } from 'react'

const UseRefexample = () => {
    let reElement = useRef()
    function resetData(e){
        e.preventDefault()
        reElement.current.focus()
        let myname = reElement.current.value
        console.log(myname);

        reElement.current.style.color = "red"
        reElement.current.style.fontSize = "25px"
    }
    function hanleInput(e) {
        e.preventDefault()
        
    }
  return (
    <div>
        <h1>useRef Example</h1>
        <div>
            <form>
                <label htmlFor='myname'>Enter Your FName:</label>
                <input type="text" ref={reElement}/>
               
                <button onClick={resetData}>Submit</button>
                <button onClick={hanleInput}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UseRefexample
