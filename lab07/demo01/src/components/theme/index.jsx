import  React,{ useContext, useState } from "react";

const themes ={
    light : {
        background : "#33cc66"
    },
    dark : {
        background : "grey"
    },
}
const Theme = (props) =>{
    const [color, setColor]=useState(themes)
    const themeContext = React.createContext(themes.light);
    const themeStyle =useContext(themeContext)
    return (
        <>
        <themeContext.Provider value={themes.light}>
            <h1>Theme with useContent</h1>
            <div style={{background:themeStyle.background}} >
                <p 
                // style={color =='dark'? 'light':  'dark'}
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias laborum nesciunt ab facilis ea? </p>
            </div>
            <button
            onClick={()=>{
                setColor(color =='dark'?'light':'dark')
                // let text = document.querySelector('#text');
                // text.style.backgroundColor = color;                
                // console.log( text.style);
            }}
            >
                Change Background 
            </button>
        </themeContext.Provider>
        </>
    );
}

export default Theme;