// TODO Add Basket: Server, Localstorage?

import Home from "./Pages/home";
import { Routes, Route } from "react-router-dom";
import ProductsID from "./Pages/products/productsID";
import NotFound from "./Pages/404-page";
import Contact from "./Pages/contact";
import Basket from "./Pages/basket";
import Products from "./Pages/products/products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Products />} />
          <Route path="/shop/products/:id" element={<ProductsID />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
