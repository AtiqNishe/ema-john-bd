import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 20);
  // console.log(first10);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(first10);
    
  const addEven=(pd)=>{
      setCart([...cart, pd])
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product pd={product} ad={addEven}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
