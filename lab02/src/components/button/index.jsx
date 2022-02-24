import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function MyButton() {
    let navigate = useNavigate();
    const handleClick = () =>{
        navigate('/profile/123')
    }
    return (
        <button onClick={handleClick}>Submit</button>
    )
}
