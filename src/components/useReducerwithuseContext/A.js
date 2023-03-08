import React, { useContext } from 'react'
import { CountContext } from './Counterexample'

const A = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
        Component A : {countContext.countState}
            <button onClick={() => countContext.countDispatch('INCREAMENT')}>Increatemnt</button>
            <button onClick={() => countContext.countDispatch('DECREAMENT')}>Decreatemnt</button>
            <button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default A
