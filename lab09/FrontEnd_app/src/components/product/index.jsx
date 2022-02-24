import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url ='http://localhost:3001'
export default function Product(props) {
  const [product,setProduct] = useState(null)

  /* api */
  useEffect(()=>{
    axios.get(url).then(res => {
      setProduct(res.data);
    })
  },[])

  if(product){
    console.log(product);
  }else{
    return null;
  }
  
  return (
    <div>
      {
        product.map(p => 
        <div>
          {p.id} - {p.name}
        </div>
        )
      }
    </div>
  )
}
