import React from 'react';
import Cart from '../components/cart/Cart';
import './stylesCartPage/stylesCartPage.css';
import { useGlobalContext } from '../context/dataContext';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const [cartState, setCartState] = useState([]);
  let { amount, loading, cart, total, clearCart, removeItem } =
    useGlobalContext();

  useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem('carrito'));
    setCartState(storage);
    if (!storage) {
      setCartState([]);
    }
  }, []);

  return (
    <>
      <div className="cart-page-container">
        <div className="cart-page">
          <section className="cart-section">
            <Cart cart={cartState} />
          </section>
        </div>
      </div>
    </>
  );
};

export default CartPage;
