import React from 'react'
import './SharedLayoutStyles/SharedLayoutStyles.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
      <main className='shared-layout-grid'>
        <Header/>
        <Outlet/>
        <Footer/>     
      </main>
  )
}

export default SharedLayout
