import React,{ useEffect } from 'react'

const useTitlechange = (count) => {
    useEffect(() => {
        document.title = `Count ${count}`
       })
}

export default useTitlechange
