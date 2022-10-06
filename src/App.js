import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import { images } from './assets';
import Products from './pages/Products';
import { productsData } from './assets/products-data/products';
import ProductPage from './pages/ProductPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const products = productsData;

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={<Home />}
              />
              <Route
                path="/:productsCategory"
                element={<Products categoria={products} />}
              />
              <Route
                path="/:productsCategory/:productName"
                element={<ProductPage products={products} />}
              />
              <Route path="/cart" element={<CartPage />}/>
              <Route path="*" element={<ErrorPage />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
