import React from 'react'
import './Product.css'

const Product = ({img, title, description}) => {
  return (
      <div className='product-card'>
          <h4 className='product-name'>{title}</h4>
          <img className='product-img' src={img} alt={title} />
          <p className='product-description'>{description}</p>
      </div>
  )
}

export default Product
