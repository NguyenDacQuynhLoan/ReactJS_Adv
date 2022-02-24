import React from 'react'
import { 
    Route,
    Routes,
    Outlet,
    Link,
    useSearchParams
 } from "react-router-dom"
import NotMatch from './notmatch'
import SearchHome from './search-home'
export default function Search() {

    return (
        <div>
            <h1>Search</h1>
            <Routes>
                <Route path="/" element={<SearchHome/>} />
                <Route path="*" element={<NotMatch/>} />
            </Routes>
        </div>
    )
}
