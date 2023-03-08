import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DatafetchingOne = () => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
            setLoading(false)
            console.log(response);
            setPost(response.data)
            setError('')
        })
        .catch(error => {
          console.log(error);
            setLoading(false)
            setPost({})
            setError('Something went Wrong')
        })
    },[])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    // })
  return (
    <div>
      {loading ? "Loading" : post.title} 
      {error ? error : null}
    </div>
  )
}

export default DatafetchingOne
