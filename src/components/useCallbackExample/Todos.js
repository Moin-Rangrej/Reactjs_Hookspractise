import React, { memo } from 'react'

const Todos = ({todos,addTodo}) => {
    console.log("child render");
  return (
    <div>
      <h1>My Todo</h1>
      {console.log(todos)}
      {
        todos.map((todo,index) => {
            {/* console.log(todo+index) */}
            return <p key={index}>{todo + index}</p>
        })
      }
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todos)