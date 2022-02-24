import React from 'react'
import Count from '../components/countClick'
import Product from '../components/product'
import Theme from '../components/theme'
export default function Index() {
    return (
        <div>
            <Count/>
            <hr />
            <Product/>
            <hr />
            <Theme/>
        </div>
    )
}
