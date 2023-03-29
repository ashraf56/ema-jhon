import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
let total=0;
let totalShipping=0;
for (const price of cart) {
    total=total+price.price;
    totalShipping=totalShipping+price.shipping;
}
let tax=total*5/100;
let GrandTotal=total+totalShipping+tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>

            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping :$ {totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${GrandTotal}</h6>
        </div>
    );
};

export default Cart;