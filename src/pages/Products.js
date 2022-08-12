import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Product from '../components/Product/Product'
import './styles/ProductsStyles.css'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import { useParams } from 'react-router-dom'





const Products = ({ categoria }) => {
  // const [titulo, setTitulo]=useState('')
  const urlparams = useParams().productsCategory
  let titulo=''
  switch (urlparams){
    case 'productsPhoto':
      categoria = categoria[0]
      titulo='Camaras y Lentes'
      break
    case 'productsLigths':
      categoria = categoria[1]
      titulo='Iluminación'
      break
    case 'productsSound':
      categoria = categoria[2]
      titulo='Sonido'
      break
  }
  
//  const categoriaUrl= images.filter(item => item.url === categoria.url)
  
  const contextData=useContext(DataContext)
  return (
    <>
      <Header></Header>
    <h2 className='products-section-title'>{titulo}</h2>
      <div className='products-list'>
        
 {      
              categoria.map((item, index) => {
          console.log(contextData)
        
          return (
          <div key={index} className='product-container'> 
              <Product img={item.img} title={item.name} description={item.description} categoria={urlparams} url={item.url}> 
               
              </Product>
              
          </div>
        )
        
      })

          }
    
    </div>
      </>
  )
}

export default Products
