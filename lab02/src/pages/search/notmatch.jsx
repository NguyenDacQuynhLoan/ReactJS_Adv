import React from 'react'
import {Link} from 'react-router-dom'
export default function NotMatch(props) {
    return (
        <div>
            <h1>Error 404</h1>
            <div>
                <Link to="/search">Go searching page</Link>
            </div>
        </div>
    )
}
