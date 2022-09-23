import React from 'react';
import './footer.css';
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="adress">
        <address className='direccion'>Villa María, Córdoba</address>
         <p>telefono: 353-5001030</p>
        <p>email: juandiego@gmail.com</p>   
      </div>

      <div className="contact-container">
        <a href="https://api.whatsapp.com/send?phone=5493535001030" target="_blank"><FaWhatsappSquare  className='icon'/></a>
       <a href="https://www.instagram.com/crono.rental/?hl=es-la" target='_blank'>< FaInstagramSquare className='icon'/></a>
       <a href="https://www.facebook.com/crono.rental" target='_blank'>< FaFacebookSquare className='icon'/></a>
      </div>
      
  </footer>
  )
}

export default Footer
