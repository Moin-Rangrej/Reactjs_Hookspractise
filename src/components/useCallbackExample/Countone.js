import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const Countone = () => {
    const [count,setCount] = useState(0)
    const [todos,setTodos] = useState([])

    const inCreament = () =>{
        setCount(count + 1)
    }

    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev,`new Entry`])
    },[todos])

  return (
    <div>
    <Todos todos={todos} addTodo={addTodo}/>
    <h1>{count}</h1>
    <button onClick={inCreament}>Click</button>
    </div>
  )
}

export default Countone
