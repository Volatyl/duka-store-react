import React from "react";

function ItemsRender({ filteredData, cartItems, setCartItems }) {
  function handleAdd(item) {
    const newDataArray = [...cartItems, item];
    setCartItems(newDataArray);
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
              <button onClick={() => handleAdd(item)}>Add To Cart</button>
              <br />
              <button>Delete Item</button>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default ItemsRender;
