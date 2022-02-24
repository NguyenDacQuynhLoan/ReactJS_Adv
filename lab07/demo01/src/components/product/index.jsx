import { useState } from "react";

const Product = (props)=>{
    const [product , setProduct] = useState([]);
    const [text,setText] = useState('')
    return(
        <>
            <h3>List of product</h3>
            <div>
                <input type='text' name="text"
                onChange={(event)=>{
                    setText( event.target.value)
                    console.log(text);
                }}
                    
                ></input>
                <button
                onClick={()=>{
                    let newProduct =[...product]
                    newProduct.push(text);
                    setProduct(newProduct)
                }}
                >Add product</button>
            </div>
            
            <ul>
                {
                    product.map((item) => 
                    <li>{item}</li>
                )
                }
            </ul>
        </>    
    )
}
export default Product;