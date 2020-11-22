import React from "react";
import "./styles/global.css";
import Routes from "./routes";
import { ProductProvider } from "./hooks/RESTApi";

function App() {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  );
}

export default App;
