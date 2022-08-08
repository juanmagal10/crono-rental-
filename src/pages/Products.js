import React from 'react'
import Header from '../components/Header/Header'
import Product from '../components/Product/Product'
import './styles/ProductsStyles.css'

const Products = ({categoria}) => {
  // console.log(categoria.nombre)
  return (
    <>
      <Header></Header>
      <h2 className='products-section-title'>Titulo</h2>
    <div className='products-list'>
        {categoria.map((item, index) => {
        
          return (
          <div key={index} className='product-container'> 
         <Product img={item.img} title={item.name} description={item.description}></Product>
          </div>
        )
        
      })}
    </div>
      </>
  )
}

export default Products
