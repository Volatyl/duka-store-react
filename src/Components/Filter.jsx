import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";

function Filter({ setFilteredData }) {
  const [data, setData] = useContext(DataContext);

  function handleChange(e) {
    const search = e.target.value;
    const newData = data.filter((item) => item.category.includes(search));
    setFilteredData(newData);
  }
  return (
    <div id="filter">
      <form>
        <input
          type="text"
          placeholder="Search By Category. Electronics - Men's Clothing - Women's Clothing - Jewelery"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Filter;
