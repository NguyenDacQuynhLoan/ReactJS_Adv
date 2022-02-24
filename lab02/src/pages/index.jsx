import React from 'react'
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Home from './home';
import MyProfile from './my-profile';
import OtherProfile from './other-files';
import Profile from './profile';
import Search from './search';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes> {/* dinh huong */}
                <Route path="/*" element={<Home/>} />
                <Route path="search/*" element={<Search/>} />
                <Route path="profile" element={<Profile/>} >{/*  dg dan */}
                    <Route path="me" element={<MyProfile/>} />
                    <Route path=":id" element={<OtherProfile/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}
