import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Stock from '../Stock/Stock';


const Product = (props) => {
    //console.log(props);
   const {img, name, price, seller, stock} = props.pd;
   const product = props.pd;
   const addEvent = props.ad;
   //let stocking = stock - 1;
    return (
        <div className="product">
            <div className="product-img">
                 <img src={img} alt="photo" />
            </div>
          <div>

             < h3 className="product-name">{name}</h3>
             <h2>By : {seller}</h2>
            <h1> USA $ {price}</h1>
            <Stock s={stock}></Stock>
            <button onClick={()=>addEvent(product)} className="btn" type="submit"> <FontAwesomeIcon icon={faShoppingCart} z />add to cart</button>
          </div>

           
        </div>)
};

export default Product;