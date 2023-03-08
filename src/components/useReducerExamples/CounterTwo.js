import React, { useEffect, useReducer, useState } from 'react'
let initialState = {
    firstCounter: 0,
    secondCounter: 10,
    name : "hello"
}
const reducer = (state,action) => {
    console.log(state,action);
    switch (action.type) {
        case 'INCREAMENT': 
            return { ...state, firstCounter: state.firstCounter + action.value , name: "world"}
        case 'DECREAMENT':
            return { ...state, firstCounter: state.firstCounter - action.value , name: "hello"}
        case 'INCREAMENT2': 
            return { ...state,secondCounter: state.secondCounter + action.value }
        case 'DECREAMENT2':
            return { ...state,secondCounter: state.secondCounter - action.value }
        case 'RESET':
            return initialState
        default:
            return state            
     }
} 
const CounterTwo = () => {
    let [state,dispatch] = useReducer(reducer,initialState)
 
  return (
    <div>
    <h1>{state.firstCounter},{state.name}</h1>
    <h1>{state.secondCounter}</h1>
      <button onClick={() => dispatch({type:'INCREAMENT',value:1})}>
      Increatemnt
      </button>
      <button onClick={() => dispatch({type:'DECREAMENT',value:1})}>
      Decreatemnt
      </button>
      <button onClick={() => dispatch({type:'INCREAMENT',value:5})}>
      Increatemnt5
      </button>
      <button onClick={() => dispatch({type:'DECREAMENT',value:5})}>
      Decreatemnt5
      </button>
      <button onClick={() => dispatch({type:'INCREAMENT2',value:1})}>
      Increatemnt
      </button>
      <button onClick={() => dispatch({type:'DECREAMENT2',value:1})}>
      Decreatemnt
      </button>
      <button onClick={() => dispatch({type:'RESET'})}>
      Reset
      </button>
    </div>
  )
}

export default CounterTwo
