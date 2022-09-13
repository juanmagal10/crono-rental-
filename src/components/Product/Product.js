import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useGlobalContext } from '../../context/dataContext';
import {FaShoppingCart} from 'react-icons/fa'

const Product = ({ img, title, description,url, categoria,id,categoriaArray,   caracteristicas }) => {
  // const {url}=categoria[2]

    const { addItem } = useGlobalContext();
  
  return (
      <div className='product-card'>
          <h4 className='product-title-name'>{title}</h4>
          <div className="product-img-desc-container">
            <img className='product-img' src={img} alt={title} />
                  <p className='product-description'>{description.length>100?`${description.substr(0,100)} ...`:description}</p>
          </div>
  
      <div className="buttons-container">
        <HashLink to={`/${categoria}/${url}/#product-container`} className='link'><button className='button'>Mas info...</button>
        </HashLink>
        <div className='link'><button className='button' onClick={()=>addItem(id, categoriaArray)}>Añadir al carrito <FaShoppingCart/></button></div>
      </div>
      </div>
  )
}

export default Product
