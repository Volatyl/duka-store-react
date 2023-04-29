import { useState } from "react";
import "../App.css";
import Header from "./Header";
import MainShop from "./MainShop";
import AddItem from "./AddItem";


function App() {
  return (
    <>
      <Header />
      <AddItem />
    
      <MainShop />
    </>
  );
}

export default App;
