import React, { useContext } from "react";
import { ProductContext } from "../App";

export default function Footer() {
  const {products, setProducts} = useContext(ProductContext);

  function removeProduct(){
    products.pop();
    setProducts([...products]);
  }
  return <div style={{position: "absolute", bottom: "100px"}}>
    <button onClick={removeProduct}>-</button>
    <button>+</button>
  </div>;
}
