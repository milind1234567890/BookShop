import React, { useState, useEffect } from "react";


const Cart = ({ cart, setCart }) => {
 
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

// cost [totalp,setTotalp]=useState(0);
const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  
  return (
    <div>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.name} />
            <p>{item.title}</p>
            <span>{item.price}</span>
         
            <p>Total for this item: ${item.price}</p>
            
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      {/* Display the total price of all items in the cart */}
      <div className="cart_total">
      <span>Total Amount :₹{totalAmount}</span> 
      </div>
    </div>
  );
};

export default Cart;
