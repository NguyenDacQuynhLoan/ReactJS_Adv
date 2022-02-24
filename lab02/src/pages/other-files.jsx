import React from 'react'
import { useParams } from 'react-router-dom'
export default function OtherProfile() {
    let param = useParams();
    return (
        <div>
            <h1>other profile ID : {param.id}</h1>
        </div>
    )
}
