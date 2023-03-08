import React, { useState } from 'react'

const HookwithArray = () => {

    let [items,setItems] = useState([])

    function addItem() {
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random() * 100) + 1
        }])
    }

  return (
    <div>
    <button onClick={addItem}>Add a Number</button>
      <ul>
        {items.map(item => (
            <li key={item.id}>{item.value}</li>  
        ))}
      </ul>
    </div>
  )
}

export default HookwithArray
