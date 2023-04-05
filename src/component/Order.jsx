import React from 'react';
import Cart from './Cart/Cart';
import './Shop/Shop.css'
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const Order = () => {
    let cartload=useLoaderData();
    console.log(cartload);
    return (
        <div className='shop'>
            <div className='oreder-list container'>
<h2>level {cartload.length}</h2>

{
    cartload.map(item => <Review
    key={item.id} item={item}
    ></Review> )
}
            </div>
            <div className='carts'>
<Cart cart={cartload}></Cart>
            </div>
        </div>
    );
};

export default Order;