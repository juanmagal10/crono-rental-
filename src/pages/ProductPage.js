import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import './stylesProductPage/productPage.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const ProductPage = ({ products}) => {
  const productUrl = useParams()

  const filteredProduct = products.filter((item) => item.url === productUrl.productName)
  
  console.log(filteredProduct)
  const product=filteredProduct[0]
  console.log(productUrl)
    return (
      <>
        <Header></Header>
            <div className="product-container" >
              <h3 className='product-name'>{product.name}</h3>
                <div className='product'>
                <img src={product.img} alt={product.name} className='product-image'/>
                <p className='product-description'>{product.description}</p>
              </div>
        <Link to={`/${productUrl.productsCategory}`} className='back-btn'><button>Back</button></Link>
        </div>
        <Footer></Footer>
        
        </>
  )
}

export default ProductPage
