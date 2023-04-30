import React from "react";

function ItemsRender({
  filteredData,
  setFilteredData,
  cartItems,
  setCartItems,
}) {
  function handleAdd(item) {
    console.log(item)
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...item, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  }

  function handleDelete(item) {
    console.log(item.id);
    fetch(`http://localhost:3000/products/${item.id}`, {
      method: "DELETE",
    });
    setFilteredData(filteredData.filter((x) => x.id !== item.id));
  }

  return (
    <div>
      {filteredData.map((item) => {
        return (
          <li key={item.id} className="li">
            <div>
              <img src={item.image} />
              <p>{item.title}</p>
              <p className="price">Ksh: {item.price}</p>
              <p>SKU: {item.quantity}</p>
              <button onClick={() => handleAdd(item)} className="addBtn">
                Add To Cart
              </button>
              <br />
              <button className="delBtn" onClick={() => handleDelete(item)}>
                Delete Item
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default ItemsRender;
