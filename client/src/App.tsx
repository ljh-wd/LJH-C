// todo: stop ID card loading bug
// todo: polish design overall

import Home from "./Pages/home";
import { Routes, Route } from "react-router-dom";
import ProductsID from "./Pages/products/productsID";
import NotFound from "./Pages/404-page";
import Contact from "./Pages/contact";
import Basket from "./Pages/basket";
import Products from "./Pages/products/products";
import SubmittedPage from "./Pages/submitted";
import CheckoutPage from "./Pages/checkout";

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
        <Route path="/submitted" element={<SubmittedPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
