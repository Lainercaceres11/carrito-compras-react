import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  const [allProduct, setAllProduct] = useState([])
  const [total, setTotal] = useState(0);
  const [counterProduct, setCounterProduct] = useState(0)

  return (
    <div>
      <Header
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        total={total}
        setTotal={setTotal}
        counterProduct={counterProduct}
        setCounterProduct={setCounterProduct}
      />
      <ProductList
        allProduct={allProduct}
        setAllProduct={setAllProduct}
        total={total}
        setTotal={setTotal}
        counterProduct={counterProduct}
        setCounterProduct={setCounterProduct}
      />
    </div>
  );
}
