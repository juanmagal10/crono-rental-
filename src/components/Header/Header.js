import React from 'react'
import logo from '../../assets/proyecto-crono.png'
import './Header.css'

const Header = () => {
  return (
    <>
      <header className='header'>
      <div className="logo-container">
        <img src={logo} alt='logo' className='logo' />
      </div>
        <div className="titulo-container">
          <h1 className='titulo'>Crono-Rental</h1>
        </div>
        <div className="nav-container">
          <nav>
            <ul className='list'>
              <li>Contacto</li>
              <li>Productos</li>
              <li>Info</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
