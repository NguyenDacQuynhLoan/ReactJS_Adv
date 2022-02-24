import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function MyButton2() {
    let navigate = useNavigate();
    const handleClick = () =>{
        navigate('/profile/me',{replace:true})
    }
    return (
        <button onClick={handleClick}>Submit 2</button>
    )
}
