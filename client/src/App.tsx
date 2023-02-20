// TODO Add Contact Page: FORM
// TODO Add Basket: Server, Localstorage?

import Home from "./Pages/home";
import Categories from "./Pages/categories-page";
import { Routes, Route } from "react-router-dom";
import Tops from "./Pages/products/products";
import ProductsID from "./Pages/products/productsID";
import Jumpers from "./Pages/jumpers/jumpers";
import JumpersId from "./Pages/jumpers/jumpersID";
import CoatsId from "./Pages/coats/coatsID";
import Coats from "./Pages/coats/coats";
import Tailoring from "./Pages/tailoring/tailoring";
import TailoringID from "./Pages/tailoring/tailoringID";
import Gymwear from "./Pages/gymwear/gymwear";
import GymwearID from "./Pages/gymwear/gymwearID";
import FootwearID from "./Pages/footwear/footwearID";
import Footwear from "./Pages/footwear/footwear";
import Legwear from "./Pages/legwear/legwear";
import LegwearId from "./Pages/legwear/legwearID";
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
