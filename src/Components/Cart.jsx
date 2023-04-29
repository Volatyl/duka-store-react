import React, { useState } from "react";

function Cart({ cartItems, setCartItems }) {
  function handleRemove(item) {
    const remove = cartItems.filter((product) => product.id !== item.id);
    setCartItems(remove);
  }

  const total = cartItems.reduce((acc, product) => acc + product.price, 0);

  return (
    <div id="cart">
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id} className="cartLi">
              <img src={item.image} />
              <p>{item.title}</p>
              <br/>
              <p>Ksh: {item.price}</p>
              <button className="delete" onClick={() => handleRemove(item)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total: {total}</p>
      <button id="checkout">CHECK OUT</button>
    </div>
  );
}

export default Cart;
