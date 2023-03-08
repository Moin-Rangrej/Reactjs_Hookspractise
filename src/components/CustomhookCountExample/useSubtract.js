import {useState} from 'react'
let initialValue = 0
const useSubtract = () => {
    const [countDec,setCountDec] = useState(initialValue)

    // const countIncreament = () =>{
    //     setCount(count + 1)
    // }

    const countDecreament = () => {
        setCountDec(countDec - 1)
    }

    // const countReset = () => {
    //     setCount(initialValue)
    // }   
    return [countDec,countDecreament]
}

export default useSubtract
