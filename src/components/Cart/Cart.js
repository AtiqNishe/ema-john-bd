import React from 'react';

const Cart = (props) => {
    
    
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping=0;
    parseInt(shipping).toFixed(2);
    if(totalPrice>35){
        shipping = 0;
    }
   else if(totalPrice>15){
    shipping = 4.99;
    }
    else if(totalPrice>0){
        shipping = 12.99;
    }
    let text = totalPrice/5;
    parseInt(text).toFixed(2);
    let grandTotalPrice = parseInt(totalPrice +shipping + text);
   
    console.log(cart);
    return (
        <div>
            <h5>Order Summary </h5>
            <p>Items Order: {cart.length}</p>
            <h3>Price: {Math.round(totalPrice)}</h3>
            <h4>TotalPrice : $ {grandTotalPrice}</h4>
            <p><small>Shipping Cost :{shipping}</small></p>
            <p><small>Text : {Math.round(text)}</small></p>
            
        </div>
    );
};

export default Cart;