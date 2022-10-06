import React from 'react'
import './Cart.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {BsTrash} from 'react-icons/bs'
import { useGlobalContext } from '../../context/dataContext';

const Cart = ({ cart }) => {
  const [showCart, setShowCart] = useState(true);
  const [loading, setLoading] = useState(true)
  const [estadoCarrito, setEstadoCarrito] = useState([])

  const{clearCart }=useGlobalContext()
  
  useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem('carrito'));
    setEstadoCarrito(storage);
    if (!storage) {
      setEstadoCarrito([]);
    }
    setLoading(false)
  }, []);

   const removerProducto = (id) => {
    const filteredState=estadoCarrito.filter(item => item.id !== id)
     setEstadoCarrito(filteredState)
     window.localStorage.setItem('carrito', JSON.stringify(filteredState))
  }
  const arrayParaWhatsapp = []
  estadoCarrito.map((item) => {
    arrayParaWhatsapp.push(item.name)
  })

  const totalDinero = estadoCarrito.reduce(
    (suma, item) => suma + item.precio, 0
  )

  if (loading) {
    return <h2 className='loading'>Loading...</h2>
  }else {
    if (estadoCarrito.length === 0 || !showCart) {
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
                   {estadoCarrito.map((product) => {
                     return (
                            <div className="cart-product">
                              <div className="cart-img-container">
                                <img src={product.img} alt="" className="cart-product-img" />
                              </div>
                              <div className="cart-name-container">
                                <h5 className="cart-product-name">{product.name}</h5>
                              </div>
                              <div className="cart-price-container">
                                <p className="cart-product-price">${product.precio}</p>
                                <BsTrash className='remove-button' onClick={()=>removerProducto(product.id)}/>
                              </div>
                            </div>
                     )
                    })}
                    <div className="total-container">
                      <p><strong>{`Total: ${totalDinero}`}</strong></p>
                    </div>
                </div>
                  <div className="clean-cart-container">
                    <button className='clean-cart-button'>
                      <a href={'https://api.whatsapp.com/send?phone=5493535001030&text=Hola buenos dias! quisiera hacer una reserva por los siguientes productos: ' + `%0A${arrayParaWhatsapp.join(',%0A')}%0A` + 'seria un total de: ' + `%0A${totalDinero}%0A $`} target='__blank'>Reservar</a>
                    </button> 
                    <button className='clean-cart-button' onClick={() => clearCart(setShowCart)}>
                      <p>Vaciar carrito</p><BsTrash />
                    </button> 
                  </div>
                </section>
              </div>
        </>
      )
  }
  }

 
     
}  

export default Cart
