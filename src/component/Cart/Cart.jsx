import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = ({cart,clearcart,children}) => {
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
            <button type="button" onClick={clearcart} className="btn btn-danger w-100 fw-bold ">Clear cart    <FontAwesomeIcon icon={faTrash} />        </button>
           {children}
        
        </div>
    );
};

export default Cart;