import {Link} from "react-router-dom";

export  function Home() {
    return (
        <>
        <h1>Home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nesciunt earum reprehenderit voluptatum ratione expedita repellendus, quibusdam delectus! Repellendus placeat sint vitae fugit repudiandae, porro perspiciatis animi nulla eius consectetur?</p>
        <Link to="/about">About</Link>
        </>
    )
}
