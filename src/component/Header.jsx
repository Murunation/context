import React, { useContext } from "react";
import {ProductContext} from "../App";

export default function Header() {
  const {products } = useContext(ProductContext);
  return <div>
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  </div>;
}
