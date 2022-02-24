import React from 'react';
import Product from '../product';
export default function ProductList(props) {
    const product = props.products
  return (
      <div>
          {product.map(produict => {
              <Product 
                id = {product.id}
                name={product.name}
                price={product.price}
                price={product.price}
                category={product.category}
    
              />
            })
            }

      </div>
      
}
