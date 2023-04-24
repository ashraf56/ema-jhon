import React, { useContext, useState } from 'react';
import Cart from './Cart/Cart';
import './Shop/Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
import Review from './Review';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Authcontext } from './Authprovider';



const Order = () => {

    let {user}=useContext(Authcontext);
    let cartload=useLoaderData();
    let [cart,setcart]=useState(cartload);

    let removecart=(id)=>{
        let remain=cart.filter(product => product.id !== id);
        setcart(remain)
        
        removeFromDb(id) 
    }

let Clearcart=()=>{
    setcart([]);
    deleteShoppingCart();
}

   console.log(cart);
    return (
        <div className='shop'>
            <div className='oreder-list container'>
<h2>level {cart.length}</h2>

{
    cart.map(item => <Review
    key={item.id} item={item} removecart={removecart}
    ></Review> )
}
            </div>
            <div className='carts'>
               
<Cart cart={cart}  clearcart={Clearcart}

> <Link to='/check'>
<button type="button"  className="btn btn-warning w-100  mt-2 fw-bold "  >Proceed     <FontAwesomeIcon icon={faArrowAltCircleRight} />        </button>
</Link> </Cart>
            </div>
        </div>
    );
};

export default Order;