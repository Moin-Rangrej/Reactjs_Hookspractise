import React, { useEffect, useState } from 'react'

const ExuseEffect = () => {
    let [wsize,setWsize] = useState(window.innerWidth)

    function actualWidth() {
            setWsize(window.innerWidth)
            console.log(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize',actualWidth)
        return () => {
            window.removeEventListener("resize",actualWidth)
        }
    })


  return (
    <div>
      <h1>{wsize}</h1>
    </div>
  )
}

export default ExuseEffect
