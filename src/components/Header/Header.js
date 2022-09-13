import React, { useState } from 'react'
import logo from '../../assets/proyecto-crono.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { HashLink } from 'react-router-hash-link'


const Header = () => {
  const [asideMenu, setAsideMenu] = useState(false)
  const [modal, setModal] = useState(false)
  const [headerShadow, setHeaderShadow]=useState(false)
  
  const showAside = () => {
    setAsideMenu(!asideMenu)
    console.log('hola')
    setModal(!modal)
  }

  const addShadow = () => {
    if (window.scrollY >= 1) {
      setHeaderShadow(true)
    }else {
      setHeaderShadow(false)
    }
  }
  window.addEventListener('scroll', addShadow)

  return (
    <>
      <div id="inicio"></div>
      <div className={modal?'modal':'modal-closed'} onClick={showAside}></div>
      <header className={headerShadow?'header-shadow header':'header'} id='header'>
      <div className="logo-container">
        <HashLink to='/#inicio' className='link'><img src={logo} alt='logo' className='logo' /></HashLink>
      </div>
        <div className="titulo-container">
          <HashLink to='/#inicio' className='link'>
            <h1 className='titulo'>Crono Rental</h1>
          </HashLink>
        </div>
        <div className="nav-container"> 
          <div className="asside-icon-container"><FiMenu className='icon' onClick={showAside} />
          </div>
          <nav className='nav'>
            <ul className='list'>
              <HashLink to='#footer' style={{textDecoration:'none', color:'#222'}}><li >Contacto</li></HashLink>
              <HashLink to='/#inicio' style={{textDecoration:'none', color:'#222'}}><li>Productos</li></HashLink>
              <HashLink to='/#about' style={{textDecoration:'none', color:'#222'}}><li>Info</li></HashLink>
              <HashLink to='/cart/#inicio' style={{textDecoration:'none', color:'#222'}}><li>Carrito</li></HashLink>
            </ul>
          </nav>
          <aside className={asideMenu ? 'aside-open aside' : 'aside-hiden aside'}>
            <ul className='aside-list'>
              <HashLink to='#footer' style={{textDecoration:'none', color:'#222'}}>
                <li onClick={showAside}>Contacto</li>
              </HashLink>
              <HashLink to='/#inicio' style={{textDecoration:'none', color:'#222'}}>
                <li  onClick={showAside}>Productos</li>
              </HashLink>
              <HashLink to='/#about' style={{textDecoration:'none', color:'#222'}}>
                <li  onClick={showAside}>Info</li>
              </HashLink>
              <HashLink to='/cart/#inicio' style={{textDecoration:'none', color:'#222'}}>
                <li  onClick={showAside}>Carrito</li>
              </HashLink>
            </ul>
          </aside>
        </div>
      </header>
    </>
  )
}

export default Header
