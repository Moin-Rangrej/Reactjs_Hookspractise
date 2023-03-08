import React, { useReducer } from 'react'
let initialState = 0
const reducer = (state,action) => {
    switch (action) {
        case 'INCREAMENT': 
            return state + 1
        case 'DECREAMENT':
            return state - 1
        case 'RESET':
            return initialState
        default:
            return state            
     }
} 
const CounterOne = () => {
    let [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
    <h1>{state}</h1>
      <button onClick={() => dispatch('INCREAMENT')}>Increatemnt</button>
      <button onClick={() => dispatch('DECREAMENT')}>Decreatemnt</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default CounterOne
