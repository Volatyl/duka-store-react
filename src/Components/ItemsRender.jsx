import React from "react";

function ItemsRender({
  filteredData,
  setFilteredData,
  cartItems,
  setCartItems,
}) {
  function handleAdd(item) {
    const newDataArray = [...cartItems, item];
    setCartItems(newDataArray);
    const newSku = item.quantity - 1;
    console.log(newSku);
    fetch(`http://localhost:3000/products/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newSku }),
    });
    
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
