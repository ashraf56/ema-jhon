import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart, notify } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

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

        let Clearcart=()=>{
            setCart([]);
            deleteShoppingCart();
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
               cart={cart} clearcart={Clearcart}
               >
<Link to='/Order'>
<button type="button"  className="btn btn-warning w-100  mt-2 fw-bold ">Review Order      <FontAwesomeIcon icon={faArrowAltCircleRight} />        </button>
</Link>

               </Cart>
            </div>
        </div>
    );
};

export default Shop;