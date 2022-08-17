import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import {images} from './assets'
import Products from "./pages/Products";
import {productsData} from './assets/products-data/products'
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const array = productsData
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path="*" element={<ErrorPage/> } ></Route>
        <Route path="/:productsCategory" element={<Products categoria={array}/> } ></Route>
        <Route path="/:productsCategory/:productName" element={<ProductPage products={array} /> } ></Route>
        {/* <Route path="/:productsCategory/:productName" element={<ProductPage products={array[1] } /> } ></Route>
        <Route path="/:productsCategory/:productName" element={<ProductPage products={array[2] } /> } ></Route> */}
        
      </Routes>
   </BrowserRouter>
  );
}

export default App;
