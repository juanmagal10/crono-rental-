import React from 'react'
import { useGlobalContext } from '../../context/dataContext';
import './Cart.css';
import { productsData } from '../../assets/products-data/products';
import { useState } from 'react';
import { useEffect } from 'react';
import { AppProvider } from '../../context/dataContext'
import {BsTrash} from 'react-icons/bs'

const Cart = ({ cart }) => {
  const [showCart, setShowCart]=useState(true)

  // const [cartProducts, setCartProducts]=useState([])
  // const product = productsData[1].products[1]

  // let { amount, loading, cart, total, clearCart, removeItem } = useGlobalContext();

  // useEffect( () => {
  //   const loadCart = async () => {
  //     return await new Promise(res => {
  //            if (cart.length === 0) {
  //       let storage = JSON.parse(window.localStorage.getItem('carrito'));
  //       cart = storage;
  //       console.log(cart);
  //       console.log(cart.length)
  //     }
  //     })
  //   }
  //   loadCart()
    
  // },[cart])
  const cleanCart = () => {
    setShowCart(false);
    window.localStorage.clear()
  }

  if (cart.length === 0||!showCart) {
    return ( <>
               <div className="cart-container">
                 <div className="cart-title-container">
                   <h3>Carrito</h3>
                   </div>
                   <section className="cart">
                 <div className="cart-products-container">
                   
                <h4>Su carrito esta vacio</h4>
                   
              </div>
                </section>
          </div>
        </>)
  } else {
    return (
        <>
               <div className="cart-container">
                 <div className="cart-title-container">
                   <h3>Carrito</h3>
                   </div>
                   <section className="cart">
                 <div className="cart-products-container">
                   
                   {cart.map((product) => {
                     return (
                           <div className="cart-product">
                            <div className="cart-img-container"><img src={product.img} alt="" className="cart-product-img" /></div>
                              <div className="cart-name-container">
                                <h5 className="cart-product-name">{product.name}</h5>
                              </div>
                              <div className="cart-price-container">
                           <p className="cart-product-price">${product.precio}</p>
                           <BsTrash/>
                              </div>
                          </div>
                     )
               })}
                   
            </div>
            <div className="clean-cart-container">
            <button className='clean-cart-button' onClick={()=>cleanCart()}>Vaciar carrito <BsTrash /></button> 
            </div>
                </section>
          </div>
        </>
      )
  }
     
      }
 
  
    // <>
    //   <div className="cart-container">

    //   <div className="cart-title-container">
    //     <h3 className='cart-title'>Carrito</h3>
    //   </div>
    //   <section className='cart'>
    //     <div className="cart-products-container">

    //     <div className="cart-product">
    //       <img src={product.img} alt="" className="cart-product-img" />
    //       <h5 className="cart-product-name">{product.name}</h5>
    //       <p className="cart-product-price">{product.precio}</p>
    //     </div>

    //     <div className="cart-product">
    //       <img src={product.img} alt="" className="cart-product-img" />
    //       <h5 className="cart-product-name">{product.name}</h5>
    //       <p className="cart-product-price">{product.precio}</p>
    //     </div>

    //     <div className="cart-product">
    //       <img src={product.img} alt="" className="cart-product-img" />
    //       <h5 className="cart-product-name">{product.name}</h5>
    //       <p className="cart-product-price">{product.precio}</p>
    //     </div>
    //     </div>
    //   </section>
    //   </div>
    // </>
   
  
  



export default Cart
