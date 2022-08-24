import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Product = ({ img, title, description,url, categoria, caracteristicas }) => {
  // const {url}=categoria[2]
  return (
      <div className='product-card'>
          <h4 className='product-title-name'>{title}</h4>
          <img className='product-img' src={img} alt={title} />
      <p className='product-description'>{description.length>100?`${description.substr(0,100)} ...`:description}</p>
  
      <HashLink to={`/${categoria}/${url}/#product-container`} className='link'><button className='button'>Mas info...</button>
      </HashLink>
      </div>
  )
}

export default Product
