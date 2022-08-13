import React from 'react';
import './footer.css';
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="adress">
        <address className='direccion'>Direccion 1213</address>
         <p>telefono: 1233456677</p>
        <p>email: juandiego@gmail.com</p>   
      </div>

      <div className="contact-container">
        <FaWhatsappSquare  className='icon'/>
       < FaInstagramSquare className='icon'/>
       < FaFacebookSquare className='icon'/>
      </div>
      
  </footer>
  )
}

export default Footer
