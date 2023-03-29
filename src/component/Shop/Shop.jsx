import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    let [products,setProducts]=useState([]);
useEffect(()=>{


fetch('products.json').then(res=>res.json()).then(data => setProducts(data))


},[])
let [cart ,setCart]=useState([])
let click=(product)=>{
  setCart([...cart,product])
        }

    return (
        <div className='shop'>
            <div className='porduct container mt-2'>
               {
               
               products.map(product => <Products
               product={product} key={product.id}
               click={click}
               ></Products>)
               
               }
            </div>
            <div className='cart'>
               <Cart
               cart={cart}
               ></Cart>
            </div>
        </div>
    );
};

export default Shop;