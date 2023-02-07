import "./App.css";
import Layout from "./component/Layout";
import Main from "./component/Main";
import { createContext, useState } from "react";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState(["a", "b", "c", "d", "e"]);
  return (
    <div className="App">
      <ProductContext value={{ products: products, setProducts: setProducts }}>
        <Layout>
          <h1>Hello Context!</h1>
          <Main />
        </Layout>
      </ProductContext>
    </div>
  );
}

export default App;
