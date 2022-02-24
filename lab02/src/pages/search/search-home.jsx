import React from 'react'
import {useSearchParams} from 'react-router-dom'
let users = ['Iphone','Samsung','Oppo','Sony']

export default function SearchHome() {
    let [searchParam , setSearchParam]= useSearchParams();
    let user = searchParam.get("user");
    let results = users.find(item => item ===user)
    // console.log(user);
     const submitEvent = (event) =>{
        event.preventDefault();
        let form = new FormData(event.currentTarget);
        let keyword = form.get('user');
    
        setSearchParam({user : keyword})

     }
    return (
        <>
            <h1>Search results</h1>
            <form onSubmit={submitEvent}>
                <input type="text" name="user" />
                <button type='submit'>Find</button>
            </form>
            <div>
                <h4>{results}</h4>
            </div>
        </>
    )
}
