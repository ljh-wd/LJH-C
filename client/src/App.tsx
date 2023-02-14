// TODO Add Contact Page: FORM
// TODO Add 404 page
// TODO Add Basket: Server, Localstorage?

// ! ------------------------------
// ! SERVER ERROR TO CHECKOUT FIRST
// ! ------------------------------

import Home from "./Pages/home";
import Categories from "./Pages/categories-page";
import { Routes, Route } from "react-router-dom";
import Tops from "./Pages/tops/tops";
import TopsId from "./Pages/tops/topsId";
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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Categories />} />
          <Route path="/shop/tops">
            <Route index element={<Tops />} />
            <Route path="/shop/tops/:id" element={<TopsId />} />
          </Route>
          <Route path="/shop/jumpers">
            <Route index element={<Jumpers />} />
            <Route path="/shop/jumpers/:id" element={<JumpersId />} />
          </Route>
          <Route path="/shop/coats">
            <Route index element={<Coats />} />
            <Route path="/shop/coats/:id" element={<CoatsId />} />
          </Route>
          <Route path="/shop/tailoring">
            <Route index element={<Tailoring />} />
            <Route path="/shop/tailoring/:id" element={<TailoringID />} />
          </Route>
          <Route path="/shop/gymwear">
            <Route index element={<Gymwear />} />
            <Route path="/shop/gymwear/:id" element={<GymwearID />} />
          </Route>
          <Route path="/shop/footwear">
            <Route index element={<Footwear />} />
            <Route path="/shop/footwear/:id" element={<FootwearID />} />
          </Route>
          <Route path="/shop/legwear">
            <Route index element={<Legwear />} />
            <Route path="/shop/legwear/:id" element={<LegwearId />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
