import React, { useEffect, useState } from 'react'
import axios from 'axios'

// superagent is also fine

const StackPair = ({ stackA, stackB }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <div>{stackA.name}</div>
            <h2 style={{
                padding: 25,
                marginTop: -20
            }}>vs</h2>
            <div>{stackB.name}</div>
        </div>
    )
}

const HomeScreen = () => {

    const [message, setMessage] = useState("Loading...")
    const [stackPairs, setStackPairs] = useState([])
    useEffect(() => {
        // fires off a request
        // axios.get('/api/hello')
        //     .then(response => {
        //         console.log(response.data)
        //         setMessage(response.data)
        //     })

        axios.get('/api/stackPairs')
            .then(response => {
                setStackPairs(response.data)
            })
    }, [])

    return (
        <>
        <h1>Home SCREEN</h1>
        {
            stackPairs.map(s => <StackPair stackA={s.stack_a} stackB={s.stack_b}/> )
        }
        </>
    )
}

export default HomeScreen