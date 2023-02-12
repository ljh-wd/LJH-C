import Home from "./Pages/home";
import Categories from "./Pages/categories-page";
import { Routes, Route } from "react-router-dom";
import Jumpers from "./Pages/jumpers";
import Coats from "./Pages/coats";
import Tops from "./Pages/tops";
import Tailoring from "./Pages/tailoring";
import Gymwear from "./Pages/gymwear";
import Legwear from "./Pages/legwear";
import Footwear from "./Pages/footwear";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Categories />} />
          <Route path="/shop/tops" element={<Tops />} />
          <Route path="/shop/coats" element={<Coats />} />
          <Route path="/shop/jumpers" element={<Jumpers />} />
          <Route path="/shop/legwear" element={<Legwear />} />
          <Route path="/shop/tailoring" element={<Tailoring />} />
          <Route path="/shop/gymwear" element={<Gymwear />} />
          <Route path="/shop/footwear" element={<Footwear />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
