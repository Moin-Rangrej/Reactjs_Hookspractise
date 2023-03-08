import React, { useReducer } from 'react'
import A from './A'
import B from './B'
import C from './C'

let initialState = 0
export const CountContext = React.createContext()

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

const Counterexample = () => {
    const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div>
    Count is: {count}
      <A />
      <B />
      <C />
    </div>
    </CountContext.Provider>
  )
}

export default Counterexample