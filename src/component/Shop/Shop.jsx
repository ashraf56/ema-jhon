import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart, notify } from '../../utilities/fakedb';
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
  addToDb(product.id)
  notify()
        }

        useEffect(()=>{
let storedCart=getShoppingCart();
let savecart=[]
for (const id in storedCart) {
   let addProduct=products.find(product=> product.id=== id);
if(addProduct){
    let quantity=storedCart[id];
    addProduct.quantity=quantity
    savecart.push(addProduct);
}

}
setCart(savecart)
        },[products])


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