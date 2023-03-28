import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    let [products,setProducts]=useState([]);
useEffect(()=>{


fetch('products.json').then(res=>res.json()).then(data => setProducts(data))


},[])

    return (
        <div className='shop'>
            <div className='porduct container mt-2'>
               {
               
               products.map(product => <Products
               product={product} key={product.id}
               
               ></Products>)
               
               }
            </div>
            <div className='cart'>
                <h3>cart </h3>
            </div>
        </div>
    );
};

export default Shop;