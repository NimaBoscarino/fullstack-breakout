import React, { useEffect } from 'react'
import axios from 'axios'
import {
    useParams
} from "react-router-dom";
  
  

const StackInfoScreen = () => {
    let { tool } = useParams();

    useEffect(() => {
        axios.get(`/stack/${tool}`)
    })
    
    return (
        <h1>STACK INFO SCREEN for {tool}</h1>
    )
}

export default StackInfoScreen