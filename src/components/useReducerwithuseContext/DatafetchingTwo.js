import React, { useReducer , useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case "FETCH_ERROR":
            return{
                loading: false,
                post: {},
                error: "Something went wrong"
            }    
    }
}

const DatafetchingTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then((response) => {
            console.log(response);
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            // console.log(error);
            dispatch({type: 'FETCH_ERROR'})
        })
    },[])

    return (
        <div>
            <h1>From DatafetchingTwo</h1>
            {count.loading ? "Loading" : count.post.title} 
            {count.error ? count.error : null}
        </div>

    )
}

export default DatafetchingTwo
