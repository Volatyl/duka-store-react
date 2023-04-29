import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => alert(error));
  }, []);

  const value = [data, setData];

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export { DataContext, DataProvider };
