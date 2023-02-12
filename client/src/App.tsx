import Home from "./Pages/home";
import Categories from "./Pages/categories-page";
import { Routes, Route } from "react-router-dom";
import Nav from "./layouts/nav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Categories />} />
          <Route path="/shop/tops" element={<><Nav  /><h1>Tops</h1></>} />
          <Route path="/shop/coats" element={<><Nav  /><h1>Coats</h1></>} />
          <Route path="/shop/jumpers" element={<><Nav  /><h1>Jumpers</h1></>} />
          <Route path="/shop/legwear" element={<><Nav  /><h1>Legwear</h1></>} />
          <Route path="/shop/tailoring" element={<><Nav  /><h1>Tailoring</h1></>} />
          <Route path="/shop/gymwear" element={<><Nav  /><h1>Gymwear</h1></>} />
          <Route path="/shop/footwear" element={<><Nav  /><h1>Footwear</h1></>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
