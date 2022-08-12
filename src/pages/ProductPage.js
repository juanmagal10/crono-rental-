import React from 'react'
import {Link, useParams} from 'react-router-dom'


const ProductPage = ({ products}) => {
  const productUrl = useParams()
  const filteredProduct = products.filter((item) => item.url === productUrl.productName)
  
  console.log(filteredProduct)
  const product=filteredProduct[0]
  console.log(productUrl)
    return (
      <>
            <div className="product" >
              <h3>{product.name}</h3>
                <div>
                <img src={product.img} alt={product.name} />
                <p>{product.description}</p>
              </div>
        </div>
        
        <Link to='/products-photo'><button>Back</button></Link>
        <h2>camara</h2>
        </>
  )
}

export default ProductPage
