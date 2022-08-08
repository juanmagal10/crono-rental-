import React, { useState } from 'react'
import logo from '../../assets/proyecto-crono.png'
import './Header.css'
import { Link } from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'


const Header = () => {
  const [asideMenu, setAsideMenu] = useState(false)
  const [modal, setModal] = useState(false)
  
  const showAside = () => {
    setAsideMenu(!asideMenu)
    console.log('hola')
    setModal(!modal)
  }

  return (
    <>
      <div className={modal?'modal':'modal-closed'} onClick={showAside}></div>
      <header className='header'>
      <div className="logo-container">
        <Link to='/'><img src={logo} alt='logo' className='logo' /></Link>
      </div>
        <div className="titulo-container">
          <h1 className='titulo'>Crono Rental</h1>
        </div>
        <div className="nav-container"> 
          <div className="asside-icon-container"><FiMenu className='icon' onClick={showAside} />
          </div>
          <nav className='nav'>
            <ul className='list'>
              <Link to='#' style={{textDecoration:'none', color:'#222'}}><li >Contacto</li></Link>
              <Link to='#' style={{textDecoration:'none', color:'#222'}}><li>Productos</li></Link>
              <Link to='#' style={{textDecoration:'none', color:'#222'}}><li>Info</li></Link>
            </ul>
          </nav>
          <aside className={asideMenu ? 'aside-open aside' : 'aside-hiden aside'}>
            <ul className='aside-list'>
              <Link to='#' style={{textDecoration:'none', color:'#222'}}>
                <li onClick={showAside}>Contacto</li>
              </Link>
              <Link to='#' style={{textDecoration:'none', color:'#222'}}>
                <li  onClick={showAside}>Productos</li>
              </Link>
              <Link to='#' style={{textDecoration:'none', color:'#222'}}>
                <li  onClick={showAside}>Info</li>
              </Link>
            </ul>
          </aside>
        </div>
      </header>
    </>
  )
}

export default Header
