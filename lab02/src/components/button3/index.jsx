import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function MyButton3() {
    let navigate = useNavigate();
    return (
        <>
        <button onClick={()=> navigate(-2)}>Back 2</button>
        <button onClick={()=> navigate(-1)}>Back 1</button>
        <button onClick={()=> navigate(1)}>Go 1</button>
        <button onClick={()=> navigate(2)}>Go 2</button>
        </>

    )
}
