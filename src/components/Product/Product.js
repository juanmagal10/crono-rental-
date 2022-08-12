import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({img, title, description,url,  categoria}) => {
  return (
      <div className='product-card'>
          <h4 className='product-name'>{title}</h4>
          <img className='product-img' src={img} alt={title} />
      <p className='product-description'>{description}</p>
      <Link to={`/${categoria}/${url}`} className='link'><button className='button'>Mas info...</button>
      </Link>
      </div>
  )
}

export default Product
