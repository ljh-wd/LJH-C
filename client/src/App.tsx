// TODO: Add loading page
// TODO: Add error page
// TODO: Add setTimeout to simulate proper loading
// TODO: Skeleton loading too?
// TODO: Add Checkout page & checkout functionality
// TODO: Re-design some areas
// TODO: 1. Landing page font.
// TODO: 2. Navbar, change basket to SVG too.
// TODO: 3. Pagnantation?
// TODO: 4. Contact page - also add `submit page
// TODO: 4. Contact page - possibly make the font less bold and the input borders darker.
// TODO Lastly, add some animations, transitions somewhere.

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
