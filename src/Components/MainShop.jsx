import React, { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import { DataContext } from "./DataContext";
import ItemsRender from "./ItemsRender";
import Cart from "./Cart";

function MainShop() {
  const [data, setData] = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <div>
      <Filter setFilteredData={setFilteredData} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <ul className="itemUl">
        <ItemsRender
          filteredData={filteredData}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </ul>
    </div>
  );
}

export default MainShop;
