import React, { useEffect, useState } from 'react'

const ApiwithuseEffect = () => {

    let [user, setUser] = useState([])

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users')
            setUser(await response.json())
            console.log(response);
        } catch (error) {

        }
        // const data = await response.json()
        // console.log(data);
    }

    useEffect(() => {
        getUsers();
    },[])

    return (
        <div>
            {
                user.map((value) => {
                    return (
                        <div key={value.id}>
                            <h1>{value.id}</h1>
                            <h3>{value.login}</h3>
                            <img src={value.avatar_url} alt="Github Users"/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiwithuseEffect

