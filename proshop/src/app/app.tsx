// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.css";
import { Route, Routes } from "react-router-dom";
import HelloWorld from "./hello-world/hello-world";
import { ProductList } from "@proshop/products";
import { OrderList } from "@proshop/orders";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HelloWorld />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/orders" element={<OrderList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
