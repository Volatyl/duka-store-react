import React, { useState } from "react";

function Cart({ cartItems, setCartItems }) {
  console.log(cartItems)
  function handleRemove(item) {
    
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    const remove = updatedCartItems.filter((product) => product.quantity !== 0);
    setCartItems(remove);
  }

  const total = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div id="cart">
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id} className="cartLi">
              <img src={item.image} />
              <p>{item.title}</p>
              <br />
              <p>Ksh: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
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
