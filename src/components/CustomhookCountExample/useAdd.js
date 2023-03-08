import {useState} from 'react'
let initialValue = 0
const useAdd = () => {
    const [count,setCount] = useState(initialValue)

    const countIncreament = () =>{
        setCount(count + 1)
    }

    const countDecreament = () => {
        setCount(count - 1)
    }

    const countReset = () => {
        setCount(initialValue)
    }   
    return [count,countIncreament,countDecreament,countReset]
}

export default useAdd
