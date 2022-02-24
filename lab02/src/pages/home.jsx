
import React from "react"
import { 
    Route,
    Routes,
    Outlet,
    Link
 } from "react-router-dom"
const Contact = React.lazy(()=>import("./about/contact")); 
const Info =  React.lazy(() => import("./about/info"));
export default function Home(props) {
    return (
        <>
            <h1>This is home page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit veniam nostrum ea dolorem modi iste, corporis quae, quas quos, recusandae sint explicabo esse nobis quisquam pariatur? Impedit blanditiis ad delectus.</p>
            <Routes>
                <Route path="/" element={<Layout/>}>                    
                    <Route path="info" element={
                        <React.Suspense fallback = {<>...</>}>
                            <Info/>
                        </React.Suspense>
                    } />
                    <Route path="contact" element={
                        <React.Suspense fallback={<>...</>} >
                            <Contact/>
                        </React.Suspense>
                    } />
                    <Route path="*" element={<NoMatch/>} />
                </Route>
            </Routes>
        </>
        
    )
}
function Layout(){
    return(
        <>
        <nav>
            <Link to="/">Home | </Link>  
            <Link to="/info">Info | </Link> 
            <Link to="/contact">Contact</Link>
        </nav>
        <hr />
        <Outlet/>
        </>
    )
}
function NoMatch(){
    return(
        <>
            <h2>Error 404</h2>
            <Link to="/home">Go home</Link>
        </>
    )
}
