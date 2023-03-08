import React, { useReducer } from 'react'

const reducer = (state, action) =>{
    switch (action.name) {
        case 'INCREAMENT ':
            return state + 1
        case 'DECREAMENT':
            return state - 1 
        default:
            return "Not valid"
    }
    
    return state;
}

const Countusereducer = () => {
    const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1></h1>
      <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({name: "INCREAMENT"})}>Increament</button>
            <button onClick={() => dispatch({name: "DECREAMENT"})}>Decreament</button>
      </div>
    </div>
  )
}

export default Countusereducer
