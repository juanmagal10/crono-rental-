import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {images} from './assets'
import Products from "./pages/Products";
import {productsData} from './assets/products-data/products'

function App() {
  const array=productsData
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/products-photo" element={<Products categoria={array}/> } ></Route>
        <Route path="/products-ligths" element={<Products categoria={array}/> } ></Route>
        <Route path="/products-sound" element={<Products categoria={array}/> } ></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
