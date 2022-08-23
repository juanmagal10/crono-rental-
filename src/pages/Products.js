import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Product from '../components/Product/Product'
import Footer from '../components/Footer/Footer'
import './stylesProducts/ProductsStyles.css'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { useParams } from 'react-router-dom'





const Products = ({ categoria }) => {
  // const [titulo, setTitulo]=useState('')
  const urlparams = useParams().productsCategory
  let titulo=''
  switch (urlparams){
    case 'productsPhoto':
      categoria = categoria[0].products
      titulo='Camaras y Lentes'
      break
    case 'productsLigths':
      categoria = categoria[1].products
      titulo='Iluminación'
      break
    case 'productsSound':
      categoria = categoria[2].products
      titulo='Sonido'
      break
  }
  
//  const categoriaUrl= images.filter(item => item.url === categoria.url)
  
  const contextData=useContext(DataContext)
  return (
    <>
      <div className='products-page-container'>

      <Header></Header>
  
      <div className="container">
        <section className='products'>
          <h2 className='products-section-title'>{titulo}</h2>
            <div className='products-list'>
        
           {
             categoria.map((item, index) => {
               
               
               return (
                 <div key={index} className='product-box'>
                    <Product img={item.img} title={item.name} description={item.description} categoria={urlparams} url={item.url} caracteristicas={item.caracteristicas}>
                    </Product>
        
                </div>
              )
              
            })
          }
        
          </div>
        </section>
        <Footer className='footer'></Footer>
      </div>
    
          </div>
      </>
  )
}

export default Products
