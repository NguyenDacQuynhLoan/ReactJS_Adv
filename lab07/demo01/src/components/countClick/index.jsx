import { useState } from "react"

const Count = (props) =>{
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Count of click : {count}</p>
            <button onClick={()=>setCount(count+1)}>Plus 1</button>
        </div>
    )
}
export default Count;