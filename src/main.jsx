import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import { DataProvider } from "./Components/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
