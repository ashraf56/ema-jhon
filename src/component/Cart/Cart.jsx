import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
let total=0;
let totalShipping=0;
let quantity=0;
for (const price of cart) {
    price.quantity=price.quantity||1;
    total=total+price.price*price.quantity;
    totalShipping=totalShipping + price.shipping *price.quantity ;
    quantity=quantity+price.quantity;
}
let tax=total*5/100;
let GrandTotal=total+totalShipping+tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>

            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping :$ {totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${GrandTotal}</h6>
        </div>
    );
};

export default Cart;