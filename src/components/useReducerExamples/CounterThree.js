//Used Multiple useReducer

import React, { useReducer } from 'react'
let initialState = 0
    const reducer = (state,action) =>{
        console.log(state);
        console.log(action);
        switch (action) {
            case "INCREAMENT":
                return state + 1
            case "DECREAMENT":
                return state - 1
            case "RESET":
                return  initialState 
            default:
                return state     
    }
}

const CounterThree = () => {
    let [state,dispatch] = useReducer(reducer,initialState)
    let [count,dispatchTwo] = useReducer(reducer,initialState)
    console.log(state);
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch("INCREAMENT")}>INCREAMENT</button>
        <button onClick={() => dispatch("DECREAMENT")}>DECREAMENT</button>
        <button onClick={() => dispatch("RESET")}>RESET</button>
        <hr></hr>
        <h1>Second Count : {count}</h1>
        <button onClick={() => dispatchTwo("INCREAMENT")}>INCREAMENT</button>
        <button onClick={() => dispatchTwo("DECREAMENT")}>DECREAMENT</button>
        <button onClick={() => dispatchTwo("RESET")}>RESET</button>
    </div>
  )
}

export default CounterThree
