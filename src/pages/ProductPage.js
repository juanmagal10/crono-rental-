import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './stylesProductPage/productPage.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {BsFillStopCircleFill} from 'react-icons/bs'


const ProductPage = ({ products}) => {
  const productUrl = useParams()

  // switch (products)
    switch (productUrl.productsCategory){
    case 'productsPhoto':
      products = products[0].products
      break
    case 'productsLigths':
      products = products[1].products
      break
    case 'productsSound':
      products = products[2].products
      break
  }

  const filteredProduct = products.filter((item) => item.url === productUrl.productName)
  
  
  const product=filteredProduct[0]
  
  console.log(product.caracteristicas)
    return (
      <>
        <Header></Header>
            <div className="container">
              <div className="product-container" >
                <h3 className='product-name'>{product.name.toUpperCase()}</h3>
                  <div className='product'>
                  <img src={product.img} alt={product.name} className='product-image'/>
              <p className='product-description'>{product.description}</p>
                  <ul className='carac-list'>
                      {product.caracteristicas.map((caracteristica, index) => {
                        return (
                          <li className='list-item' key={index}><BsFillStopCircleFill className='list-icon'/>{caracteristica}</li>
                        )
                      })}
                <li className='list-item'><BsFillStopCircleFill className='list-icon'/>Precio: ${product.precio} la jornada de 8hs.</li>
                  </ul>
                </div>
                      <Link to={`/${productUrl.productsCategory}`} className='back-btn'><button>Back</button></Link>
                      </div>
                      <Footer></Footer>
            </div>
        
        </>
  )
}

export default ProductPage
