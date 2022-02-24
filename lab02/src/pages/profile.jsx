import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import MyButton from '../components/button'
import MyButton2 from '../components/button2'
import MyButton3 from '../components/button3'

export default function Profile(props) {
    return (
        <>
        <nav>
            <Link to="me">My profile</Link>
        </nav>
        <MyButton/>
        <MyButton2/> 
        <MyButton3/>
        <Outlet></Outlet>
        </>
    )
}
